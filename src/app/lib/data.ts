import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import {
  Account,
  Book,
  Comment,
  History,
} from './definitions.ts';


export async function fetchLogOrRegister(para:{name:string,password:string}) {
 
  noStore();

  try {

    const data = await sql<Account>`
      SELECT password
      FROM invoices
      WHERE name = ${para.name}
      `;

    if (data.rows.length==1){
      return data.rows[0].password
    }
    else {
      await sql`
        INSERT INTO users (name, password, borrowing)
        VALUES (${para.name}, ${para.password}, 0)
        ON CONFLICT (name) DO NOTHING;
      `
      return para.name
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch or register.');
  }
}

export async function fetchComments(id:number) {
  noStore();

  try {
        const comments = await sql`SELECT *
        FROM comments
        WHERE id = ${id}
        `;
        return comments

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}


export async function fetchBooks(
  currentPage: number,
  order: 'thumbs'|'time',
  cata: string='',
  ) {
  
  const ITEMS_PER_PAGE = 5;
  
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    let query
    if (!cata){
       query = sql<Book>`
        SELECT *
        FROM books
        WHERE cata = ${cata}
        ORDER BY ${order} DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
    }
    else {
      query = sql<Book>`
        SELECT *
        FROM books
        ORDER BY ${order} DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
      }

      const books = await query

    return books.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch books.');
  }
}
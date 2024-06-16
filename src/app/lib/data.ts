"use server"

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import {
  Account,
  Book,
  Comment,
  History,
} from './definitions.ts';
import exp from 'constants';
import { error } from 'console';

export async function fetchUsers() {

  noStore()

  try {

    const data = await sql`
    SELECT name FROM users`

    return data.rows
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users name.');
  }
}
  
export async function fetchLogin(name:string,password:string) {
  noStore()

  try {

    const data = await sql`
    SELECT password FROM users WHERE name = ${name}`

    if (data.rows[0].password==password){
      return name
    }
    else {
      return 'name occupied or password wrong'
    }

  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to login');
  }
}

export async function fetchRegister(name:string,password:string) {
 
  noStore();

  try {

    await sql`
      INSERT INTO users (name, password, borrowing)
      VALUES (${name}, ${password}, 0)
    `

    return name
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to register.');
  }
}

export async function fetchComments(id:number) {
  
  noStore();

  try {
        const comments = await sql`SELECT *
        FROM comments
        WHERE id = ${id}
        `;
        return comments.rows

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}


export async function fetchBooks(
  currentPage: number,
  order: 'thumbs'|'time',
  cata: string,
  ) {
  
  const ITEMS_PER_PAGE = 5;
  
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    let books 

    if (cata!='all'){
      if (order !='thumbs'){
        books = await sql`
         SELECT *
         FROM books
         WHERE cata = ${cata}
         ORDER BY time DESC
         LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
       `;
      }
      else{
        books = await sql`
         SELECT *
         FROM books
         WHERE cata = ${cata}
         ORDER BY thumbs DESC
         LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
       `;
      }
    }
    else {
      if (order!='thumbs'){
        books = await sql`
          SELECT *
          FROM books
          ORDER BY time DESC
          LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
      }
      else {
        books = await sql`
          SELECT *
          FROM books
          ORDER BY thumbs DESC
          LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
      }
      }

    return books.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch books.');
  }
}

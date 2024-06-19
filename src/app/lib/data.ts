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
  borrowed?:string
  ) {

    
  const ITEMS_PER_PAGE = 5;
    
  noStore();
  

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    let books 

    if (borrowed) {
      if (order !='thumbs'){
        books = await sql`
           SELECT *
           FROM books
           WHERE borrowed = ${borrowed}
           ORDER BY time DESC
           LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
         `
      }
      else {
        books = await sql`
           SELECT *
           FROM books
           WHERE borrowed = ${borrowed}
           ORDER BY thumbs DESC
           LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
         `
      }
    }else{
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
    }

    return books.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch books.');
  }
}

export async function borrowBook(id:number, user:string) {
  
  noStore()

  try {
    await sql`
      UPDATE books
      SET status = 1,
      borrowed = ${user}
      WHERE id = ${id}
    `

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to borrow books.');
  }

}

export async function returnBook(id:number) {
  
  noStore()

  try {
    await sql`
      UPDATE books
      SET status = 0,
      borrowed = null
      WHERE id = ${id}
    `

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to return books.');
  }

}

export async function makeComment(id:number,comment:string,account:string, time:string) {

  try {
    
    await sql`
    INSERT into comments (id, content, account, time)
    VALUES(${id}, ${comment}, ${account}, ${time})
    `

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to make comments.');
  }
  
}

export async function pageCount(
  cata: string,
  borrowed?:string
  ) {
  
  const ITEMS_PER_PAGE = 5;
  
  noStore();

  try {

    let booksCount 


    if (cata=='borrowed'){
      booksCount = await sql`
      SELECT COUNT(*)
      FROM books
      WHERE borrowed = ${borrowed}
      `;
    }
    else if (cata!='all'){
      booksCount = await sql`
       SELECT COUNT(*)
       FROM books
       WHERE cata = ${cata}
       `;
     }
    else {
        booksCount = await sql`
          SELECT COUNT(*)
          FROM books
        `;
      }

    return Math.floor(booksCount.rows[0].count/5)+1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to count books.');
  }
}
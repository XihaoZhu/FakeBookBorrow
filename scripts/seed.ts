import { VercelClientBase } from "@vercel/postgres";

const { db } = require('@vercel/postgres');
const {
  accounts,
  books,
  comments,
  histories,
} = require('../src/app/lib/placeholder-data');

const bcrypt = require('bcrypt');

async function seedAccounts(client:VercelClientBase) {
  try {
    // Create the "accounts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        name VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        borrowing TEXT DEFAULT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "accounts" table
    const insertedAccounts = await Promise.all(
      accounts.map(async (account:{[key:string]:string|number}) => {
        const hashedPassword = await bcrypt.hash(account.password, 10);
        return client.sql`
        INSERT INTO users (name, password, borrowing)
        VALUES (${account.name}, ${hashedPassword}, ${account.borrowing})
        ON CONFLICT (name) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAccounts.length} users`);

    return {
      createTable,
      accounts: insertedAccounts,
    };
  } catch (error) {
    console.error('Error seeding accounts:', error);
    throw error;
  }
}

async function seedBooks(client:VercelClientBase) {
  try {
    // Create the "books" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    author TEXT NOT NULL
    thumbs INTEGER DEFAULT 0,
    time DATE NOT NULL,
    cata TEXT DEFAULT NULL,
    status INTEGER DEFAULT 0,
    description TEXT NOT NULL
  );
`;

    console.log(`Created "books" table`);

    // Insert data into the "invoices" table
    const insertedBooks = await Promise.all(
      books.map(
        (book:{[key:string]:string|number}) => client.sql`
        INSERT INTO books ( name, author, time, cata, description)
        VALUES (${book.name}, ${book.author}}, ${book.time}, ${book.cata}, ${book.description})
        ON CONFLICT (name) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBooks.length} invoices`);

    return {
      createTable,
      books: insertedBooks,
    };
  } catch (error) {
    console.error('Error seeding books:', error);
    throw error;
  }
}

async function seedComments(client:VercelClientBase) {
  try {
    // Create the "Comments" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER NOT NULL,
        content TEXT NOT NULL,
      );
    `;

    console.log(`Created "comments" table`);

    // Insert data into the "comments" table
    const insertedComments = await Promise.all(
      comments.map(
        (comment:{[key:string]:string}) => client.sql`
        INSERT INTO comments (id, content)
        VALUES (${comment.id}, ${comment.content})
      `,
      ),
    );

    console.log(`Seeded ${insertedComments.length} customers`);

    return {
      createTable,
      comments: insertedComments,
    };
  } catch (error) {
    console.error('Error seeding comments:', error);
    throw error;
  }
}

async function seedHistories(client:VercelClientBase) {
  try {
    // Create the "histories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS histories (
        id INTEGER NOT NULL,
        person TEXT NOT NULL,
        returned DEFAULT 0
      );
    `;

    console.log(`Created "histories" table`);

    // Insert data into the "revenue" table
    const insertedHistories = await Promise.all(
      histories.map(
        (his:{[key:string]:string|number}) => client.sql`
        INSERT INTO histories (id, person)
        VALUES (${his.id}, ${his.person})
      `,
      ),
    );

    console.log(`Seeded ${insertedHistories.length} revenue`);

    return {
      createTable,
      histories: insertedHistories,
    };
  } catch (error) {
    console.error('Error seeding histories:', error);
    throw error;
  }
}

async function main() {
  
  const client = await db.connect();

  await seedAccounts(client);
  await seedBooks(client);
  await seedComments(client);
  await seedHistories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

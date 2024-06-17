
const { db } = require('@vercel/postgres');
const {
  accounts,
  books,
  comments,
  histories,
} = require('../src/app/lib/placeholder-data');

async function seedAccounts(client) {
  try {
    // Create the "accounts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        name VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        borrowing INTEGER DEFAULT 0
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "accounts" table
    const insertedAccounts = await Promise.all(
      accounts.map(async (account) => {
        return client.sql`
        INSERT INTO users (name, password, borrowing)
        VALUES (${account.name}, ${account.password}, ${account.borrowing})
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

async function seedBooks(client) {
  try {
    // Create the "books" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    author TEXT NOT NULL,
    thumbs INTEGER DEFAULT 0,
    time DATE NOT NULL,
    cata TEXT DEFAULT NULL,
    status INTEGER DEFAULT 0,
    description TEXT NOT NULL,
    borrowed TEXT
  );
`;

    console.log(`Created "books" table`);

    // Insert data into the "invoices" table
    const insertedBooks = await Promise.all(
      books.map(
        (book) => client.sql`
        INSERT INTO books ( name, author, time, cata, description, thumbs)
        VALUES (${book.name}, ${book.author}, ${book.time}, ${book.cata}, ${book.description}, ${book.thumbs})
        ON CONFLICT (name) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBooks.length} books`);

    return {
      createTable,
      books: insertedBooks,
    };
  } catch (error) {
    console.error('Error seeding books:', error);
    throw error;
  }
}

async function seedComments(client) {
  try {
    // Create the "Comments" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER NOT NULL,
        content TEXT NOT NULL,
        account TEXT NOT NULL,
        time DATE NOT NULL
      );
    `;

    console.log(`Created "comments" table`);

    // Insert data into the "comments" table
    const insertedComments = await Promise.all(
      comments.map(
        (comment) => client.sql`
        INSERT INTO comments (id, content, account, time)
        VALUES (${comment.id}, ${comment.content}, ${comment.account}, ${comment.time});
      `,
      ),
    );

    console.log(`Seeded ${insertedComments.length} comments`);

    return {
      createTable,
      comments: insertedComments,
    };
  } catch (error) {
    console.error('Error seeding comments:', error);
    throw error;
  }
}

async function seedHistories(client) {
  try {
    // Create the "histories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS histories (
        id INTEGER NOT NULL,
        person TEXT NOT NULL,
        returned INTEGER DEFAULT 0
      );
    `;

    console.log(`Created "histories" table`);

    // Insert data into the "revenue" table
    const insertedHistories = await Promise.all(
      histories.map(
        (his) => client.sql`
        INSERT INTO histories (id, person)
        VALUES (${his.id}, ${his.person})
      `,
      ),
    );

    console.log(`Seeded ${insertedHistories.length} histories`);

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


import type { Knex } from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.BOOK_DB_NAME,
      user: process.env.BOOK_DB_USERNAME,
      password: process.env.BOOK_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.BOOK_DB_NAME,
      user: process.env.BOOK_DB_USERNAME,
      password: process.env.BOOK_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;

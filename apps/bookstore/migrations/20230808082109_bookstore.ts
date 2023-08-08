import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('books', (table) => {
      table.increments('id');
      table.string('title', 255).notNullable();
      table.string('author', 255).notNullable();
      table.date('released_at').notNullable();
    })
    .createTable('orders', (table) => {
      table.increments('id');
      table.uuid('buyer_mongo_id').notNullable();
      table
        .uuid('book_id')
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');
      table.bigint('price');
      table.date('buy_at');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders').dropTable('books');
}

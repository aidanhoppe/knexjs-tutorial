const { references } = require("../../lib/tableUtils");

exports.up = async (knex) => {
  await knex.schema.createTable('user_push_token', (table) => {
    table.string('push_token').primary()
    references(table, 'user').notNullable()
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('user_push_token')
};

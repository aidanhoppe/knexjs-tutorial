const { references } = require("../../lib/tableUtils");

exports.up = async (knex) => {
  await knex.schema.createTable('available_payout', (table) => {
    references(table, 'user').primary()
    table.float('amount').defaultTo(0)
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('available_payout')
};

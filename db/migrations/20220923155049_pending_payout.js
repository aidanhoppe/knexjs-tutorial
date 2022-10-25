const { references } = require("../../lib/tableUtils");

exports.up = async (knex) => {
  await knex.schema.createTable('available_payout', (table) => {
    references(table, 'user').primary()
    table.float('amount').defaultTo(0)
    table.timestamps(true, true)
  })
  await knex.schema.createTable('stripe_user', (table) => {
    references(table, 'user').primary()
    table.string('account_id').notNullable()
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('available_payout')
  await knex.schema.dropTable('stripe_user')
};

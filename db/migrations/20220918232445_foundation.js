const { references } = require('../../lib/tableUtils')

exports.up = async (knex) => {
  await knex.schema.createTable('address', (table) => {
    table.increments('address_id')
    table.string('street_address_1', 80).notNullable()
    table.string('street_address_2', 80)
    table.string('city', 50).notNullable()
    table.enu('state', [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ])
    table.integer('zipcode').notNullable()
    table.string('country', 40).notNullable()
    table.timestamps(true, true)
  })
  await knex.schema.createTable('user', (table) => {
    table.increments('user_id')
    table.string('firebase_id').unique()
    table.string('first_name', 30).notNullable()
    table.string('last_name', 30).notNullable()
    table.string('shop_name', 30)
    table.string('shop_photo')
    table.text('shop_policy')
    table.float('rating')
    table.string('email').notNullable().unique()
    table.boolean('verified_email').defaultTo(false)
    table.bigInteger('phone')
    table.boolean('verified_phone').defaultTo(false)
    table.specificType('recent_searches', 'text ARRAY')
    table.timestamp('last_login').defaultTo(knex.fn.now())
    table.boolean('banned').defaultTo(false)
    table.specificType('feed_tags', 'text ARRAY')
    table.boolean('show_tips').defaultTo(true)
    table.integer('reviews_count').defaultTo(0)
    references(table, 'address', notNullable=false)
    table.timestamps(true, true)
  })
  await knex.schema.createTable('category', (table) => {
    table.increments('category_id')
    table.string('name').notNullable().unique()
    table.integer('use_count_current')
    table.integer('use_count_all')
    table.timestamps(true, true)
  })
  await knex.schema.createTable('brand', (table) => {
    table.increments('brand_id')
    references(table, 'user', undefined, 'submitted_by')
    table.string('name', 30).notNullable().unique()
    table.enu('status', ['approved', 'under_review', 'rejected']).notNullable().defaultTo('under_review')
    table.integer('use_count_current')
    table.integer('use_count_all')
    table.timestamps(true, true)
  })
  await knex.schema.createTable('listing', (table) => {
    table.increments('listing_id')
    references(table, 'user', undefined, 'seller_id')
    table.string('title', 60).notNullable()
    table.integer('price', 4).notNullable()
    table.integer('shipping', 3).notNullable()
    table.text('description')
    table.enu('condition', ['Nonfunctional', 'Poor', 'Fair', 'Good', 'Excellent', 'Mint', 'New']).notNullable()
    table.text('thumbnail').notNullable()
    table.specificType('photos', 'text ARRAY').notNullable()
    references(table, 'brand')
    table.string('model')
    references(table, 'category')
    table.boolean('accepting_offers').notNullable()
    table.boolean('archived').notNullable().defaultTo(false)
    table.enu('status', ['Sold', 'Active', 'Archived', 'Invisible']).defaultTo('Active')
    table.integer('save_count').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = async (knex) => {
    await knex.schema.dropTable('listing')
    await knex.schema.dropTable('brand')
    await knex.schema.dropTable('category')
    await knex.schema.dropTable('user')
    await knex.schema.dropTable('address')
};

// Update with your config settings.
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // TODO change to your db name
      host: process.env.HOST_NAME,
      database: process.env.DATABASE_NAME,

      // change to your db user
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

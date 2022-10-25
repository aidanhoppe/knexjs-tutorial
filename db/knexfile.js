// Update with your config settings.
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // // TODO change to your db name
      // host: process.env.HOST_NAME,
      // database: process.env.DATABASE_NAME,

      // // change to your db user
      // user: process.env.USER,
      // password: process.env.PASSWORD

      // TODO change to your db name
      host: "pdevfree.cls3klxkeiws.us-west-1.rds.amazonaws.com",
      database: "Testing",

      // change to your db user
      user: "pdevfree",
      password: "pdevfree"
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

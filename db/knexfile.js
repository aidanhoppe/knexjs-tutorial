// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // TODO change to your db name
      host: 'pdevfree.cls3klxkeiws.us-west-1.rds.amazonaws.com',
      database: 'Testing',

      // change to your db user
      user: 'pdevfree',
      password: 'pdevfree'
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

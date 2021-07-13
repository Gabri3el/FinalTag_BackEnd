const {DATABASE_URL} = require('./.env');
URL = DATABASE_URL


module.exports = {
      client: 'postgresql',
      connection: URL,
      pool: {
        min: 2,
        max: 10,
        propagateCreateError: false
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    };
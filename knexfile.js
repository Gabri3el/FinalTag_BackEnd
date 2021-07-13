const {DATABASE_URL} = require('./.env');

module.exports = {
      client: 'postgresql',
      connection: DATABASE_URL,
      pool: {
        min: 2,
        max: 10,
        propagateCreateError: false
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      ssl: true
    };
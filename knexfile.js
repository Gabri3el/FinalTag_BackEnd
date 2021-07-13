const {db} = require('./.env')

module.exports = {
      client: 'postgresql',
      connection: db,
      pool: {
        min: 2,
        max: 10,
        propagateCreateError: false
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    };
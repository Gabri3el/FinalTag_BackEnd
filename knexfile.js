require('dotenv').config();

module.exports = {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10,
        idleTimeoutMillis: 10000, 
        createTimeoutMillis: 10000, 
        acquireTimeoutMillis: 10000
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      ssl: true
    };
const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([process.env.DATABASE_URL || config])
module.exports = knex
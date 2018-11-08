/**
 * db/index.js
 *
 * @description :: Config db client
 * @docs        :: https://knexjs.org/
 */
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'near',
    charset: 'utf8'
  }
})

module.exports = knex

/**
 * loadUsers.js
 */
const bcrypt = require('bcryptjs')

const knex = require('./db')
const users = [
  {
    email: 'user1@nearsoft.com',
    password: '123457'
  },
  {
    email: 'user2@nearsoft.com',
    password: '123456'
  }
]
const tableName = 'users'

const createUser = async data => {
  const pass = await bcrypt.hash(data.password, 10)
  await knex(tableName)
    .insert({
      email: data.email,
      password: pass
    })
}

Promise.all(users.map(user => {
  return createUser(user)
}))
  .then(result => {
    console.log('Users created successufully')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

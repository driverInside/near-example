/**
 * router/api/auth.js
 *
 * @description :: Describes the quotes api routes
 * @docs        :: TODO
 */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('koa-router')({ sensitive: true })

const knex = require('../../db')
const tableName = 'users'

router.post('/auth/login', async (ctx, next) => {
  const { email, password } = ctx.request.body || {}

  const user = await knex.select().table(tableName).where('email', email)

  if (bcrypt.compareSync(password, user[0].password)) {
    delete user[0].password
    const token = jwt.sign({
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365),
      user: user[0]
    }, 'thisIsAnUnsafeKey')

    ctx.body = {
      success: true,
      user: user[0],
      token
    }
  } else {
    ctx.status = 401
    ctx.body = {
      success: false
    }
  }
})

module.exports = router

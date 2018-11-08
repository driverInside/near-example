/**
 * routes/index.js
 *
 * @description :: Defines routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

const auth = require('../middleware/auth')

// Auth routes
const authApi = require('./api/auth')
router.use('', authApi.routes(), authApi.allowedMethods())
// Quotes routes
const quoteApi = require('./api/quotes')
router.use(auth, quoteApi.routes(), quoteApi.allowedMethods())

module.exports = router

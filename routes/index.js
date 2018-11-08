/**
 * routes/index.js
 *
 * @description :: Defines routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

// Quotes routes
const quoteApi = require('./api/quotes')
router.use('', quoteApi.routes(), quoteApi.allowedMethods())

module.exports = router

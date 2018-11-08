/**
 * server.js
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const router = require('./routes')

app.use(bodyParser())
// routes
app.use(router.routes(), router.allowedMethods())

app.listen(3100)

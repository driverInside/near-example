/**
 * router/api/quotes.js
 *
 * @description :: Describes the quotes api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

const Quotes = require('../../models/quotes')

router.get('/', async (ctx, next) => {
  const quotes = await Quotes.get()

  ctx.body = {
    success: true,
    quotes
  }
})

router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id

  const quote = await Quotes.getById(id)

  ctx.body = {
    success: true,
    quote
  }
})

router.get('/random', async (ctx, next) => {
  const quote = await Quotes.random()

  ctx.body = {
    success: true,
    quote
  }
})

router.get('/:id/is_funny', async (ctx, next) => {
  const id = ctx.params.id

  const isFunny = await Quotes.isFunny(id)

  ctx.body = {
    success: true,
    result: `The quote is ${isFunny}`
  }
})

// creates a new item
router.post('/', async (ctx, next) => {
  const body = ctx.request.body

  await Quotes.create(body)

  ctx.status = 201
  ctx.body = {
    success: true,
    body
  }
})

router.put('/:id', async (ctx, next) => {
  const id = ctx.params.id
  const body = ctx.request.body

  await Quotes.update(id, body)

  ctx.body = {
    success: true,
    quote: body
  }
})

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id

  await Quotes.delete(id)

  ctx.body = {
    success: true,
    deleted: true
  }
})

module.exports = router

/**
 * middleware/auth.js
 */
const jwt = require('jsonwebtoken')

module.exports = async (ctx, next) => {
  const token = ctx.request.header['auth-token'] || ''
  try {
    if (!token) {
      ctx.status = 401
      ctx.body = {
        success: false,
        message: 'No auth token'
      }
      return false
    }

    const decoded = jwt.verify(token, 'thisIsAnUnsafeKey')

    return next()
  } catch (error) {
    ctx.status = 401
    ctx.body = {
      success: false,
      message: 'You don\'t have permissions',
      error
    }
  }
}

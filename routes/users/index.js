const HttpErrors = require('http-errors')
const { check, validationResult } = require('express-validator')
const router = require('express').Router()

router.get('/accounts', async (req, res, next) => {
  res.status(200).send('Hello ACCOUNTS!')
})

router.post('/register', [
  check('email').isEmail()
],
async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw HttpErrors.BadRequest(errors.array().join(', '))
    }

    res.send({ data: 'success' })
  } catch (error) {
    next(error)
  }
})

module.exports = router

const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      // need to figure out which validation failed
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must must contain ONLY lower case, upper case, and/or numeric characters. Additionally, password must be at least 8 but not greater than 32 characters in length.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration.'
          })
      }
    } else {
      next()
    }
  }
}



// HTTP methods:
//  get
//  post
//  put
//  patch
//  delete

module.exports = (app) => {


  // ROUTES
  // status
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
  // register
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your user was registered!`
    })
  })
}

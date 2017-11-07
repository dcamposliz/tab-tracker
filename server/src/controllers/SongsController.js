const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Oops... an error has occurred trying to fetch the songs. Try again later.'
      })
    }
  },//end of async post
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      console.log('we are here', err)
      res.status(500).send({
        error: 'Oops... an error has occurred trying to create songs. Try again later.'
      })
    }
  }//end of async post
}//end of module.exports

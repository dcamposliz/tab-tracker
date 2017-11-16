const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search){
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Oops... an error has occurred trying to fetch the songs. Try again later.'
      })
    }
  },// end of async index
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Oops... an error has occurred trying to fetch the songs. Try again later.'
      })
    }
  },// end of async show
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
  },// end of async post
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(this.body)
    } catch (err) {
      console.log('we are here', err)
      res.status(500).send({
        error: 'Oops... an error has occurred trying to update the song. Try again later.'
      })
    }
  }// end of async post
}// end of module.exports

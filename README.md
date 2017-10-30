# tab-tracker

```
$ git clone git@github.com:dcamposliz/tab-tracker.git
$ npm install -g vue-cli
$ vue init webpack client
$ cd client
$ npm install
$ node --version
$ ls |grep node_modules
$ npm run dev
```

Now there is a beautiful Vue.JS client running on our browser. Push to Git.

```
$ cd /tab-tracker
$ mkdir server
$ cd server

$ npm init -f
$ npm install --save nodemon eslint
```

Modify `/tab-tracker/server/package.json` such that it looks like:

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "eslint": "^4.10.0",
    "nodemon": "^1.12.1"
  }
}
```

Run stuff:

```
$ cd /tab-tracker/server
$ node ./node_modules/eslint/bin/eslint.js --init
$ npm install --save express body-parser cors morgan

$ mkdir src
$ cd src
$ touch app.js
```

Modify `/tab-tracker/server/src/app.js` such that it looks like:

```
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// HTTP methods:
//  get
//  post
//  put
//  patch
//  delete

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)

```

https://www.youtube.com/watch?v=Fa4cRMaTDUI&t=296s

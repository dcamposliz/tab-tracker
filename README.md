# tab-tracker

This project features a full stack application using Vue.js and Express.js.

References:
* https://www.youtube.com/watch?v=Fa4cRMaTDUI
* https://github.com/codyseibert/tab-tracker


# Video 1: [Full Stack Web App using Vue.js & Express.js: Part 1 - Intro](https://www.youtube.com/watch?v=Fa4cRMaTDUI)


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

At this point, we can run both the client, and the server applications.

To run the client:

```
cd /tab-tracker/client
npm run dev
```

To run the server:

```
cd /tab-tracker/server
npm start
```

Download Postman to test out the server's endpoints.

## Create Register

Run:

```
cd /tab-tracker/client
npm install --save axios
```

# Video 2: [Full Stack Web App using Vue.js & Express.js: Part 2 - Sequelize](https://www.youtube.com/watch?v=Fa4cRMaTDUI)

Install `sequelize` within `server`:

```
$ cd /tab-tracker/server
$ npm install --save sequelize sqlite3@3.1.8
```

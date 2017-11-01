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

Run more stuff:
```
cd /tab-tracker/client/src
mkdir services
cd services
touch Api.js
touch AuthenticationService.js
```

Update `/tab-tracker/client/src/services/Api.js` such that:

```
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
```

Update `/tab-tracker/client/src/services/AuthenticationService.js` such that:

```
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
```

Update `/tab-tracker/client/src/router/index.js` such that:

```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
```

Run more stuff:
```
cd /tab-tracker/client/src/components
touch Register.vue
```

Update `/tab-tracker/client/src/components/Register.vue` such that:

```
<template>
  <div class="register">
    <h1>Register</h1>
    <input
        type="email"
        name="email"
        placeholder="email"
        v-model="email"
    />
    <br/>
    <input
        type="password"
        name="password"
        placeholder="password"
        v-model="password"
    />
    <br/>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
```

Now go to the client and enter creds, submit them, and watch the console log.

# Video 2: [Full Stack Web App using Vue.js & Express.js: Part 2 - Sequelize](https://www.youtube.com/watch?v=Fa4cRMaTDUI)

Check out the oficial docs for [sequelize](http://docs.sequelizejs.com/)

Install `sequelize` and `sqlite3@3.1.8` within `server`:

```
$ cd /tab-tracker/server
$ npm install --save sequelize sqlite3@3.1.8
```

Update `/tab-tracker/server/src/app.js` such that:

```
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const sequelize = require('./models')
const config = require('./config/config')

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

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`
  })
})

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
```

Make a `config.js` file in `/tab-tracker/server/src/config`:

```
$ cd /tab-tracker/server/src
$ mkdir config
$ cd config
$ touch config.js
```

Update `/tab-tracker/server/src/config/config.js` such that:

```

```

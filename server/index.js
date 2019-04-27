
require('dotenv').config()
const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000
    } = nuxt.options.server

    // Build only in dev mode

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cookieParser())
    app.use(session({
        secret: 'justin',
        resave: false,
        saveUninitialized: false
    }))
    require('./routes')(app)
    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start()

/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))*/

// require('./routes')(app)

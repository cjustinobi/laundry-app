let jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')

let isAdmin = (req, res, next) => {
    try {
        let token = req.headers['x-access-token']
        console.log('this is the token' + token)
        res.status(200).send(token)
    } catch (err) {
        console.log('this is an error from middelware ' + err)
        res.status(500).send(err)
    }
}

module.exports = {
    isAdmin
}

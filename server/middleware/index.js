let jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')

module.exports = {
    isAdmin(req, res, next) {
        if (req.session.user_type === 1) {
            console.log('this is go ahead from middleware')
            next()
        } else {
            console.log('this is an error from middelware ' + JSON.stringify(req.session))
            res.status(500).send('not permitted to do this')
        }
    }
}

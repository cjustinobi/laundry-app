const User = require('../../models').user
const jwt = require('jsonwebtoken')
const jwtConfig = require('../../config/jwt')
const bcrypt = require('bcrypt')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, jwtConfig.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async login(req, res) {
        try {
            let user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!user) {
                return res.status(403).send({error: 'user not found'})
            }
            user = user.toJSON()
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (err) res.status(500).send({ error: 'server error' })
                result ? res.status(200).send({ user, token: jwtSignUser(user) }) :
                    res.status(401).send({ error: 'incorrect login details'})
            })

        } catch (e) {
            res.status(401).send({ error: 'incorrect login details'})
        }

    }
}
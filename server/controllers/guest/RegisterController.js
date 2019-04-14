const User = require('../../models').user;
const jwt = require('jsonwebtoken')
const config = require('../../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            let user = await User.create({
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                plan_id: req.body.plan_id
            })
            res.status(201).send(user)
        } catch(err) {
            res.status(400).send({error: 'registration is unsuccessful'})
        }
    }
}
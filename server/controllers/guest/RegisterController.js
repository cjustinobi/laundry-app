const user = require('../../models').user;
const jwt = require('jsonwebtoken')
const config = require('../../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    register(req, res) {
        return user
            .create({
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                plan_id: req.body.plan_id
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};
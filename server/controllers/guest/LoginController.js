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
            // const isPasswordValid = await user.comparePassword(req.body.password)
            bcrypt.compare(req.body.password, user.password, function (err, result){
                return console.log(result)
                    // return res.send({ user, token: jwtSignUser(user)})
            })

        } catch (e) {
            console.log(e)
        }

    }
}
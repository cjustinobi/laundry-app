const User = require('../../models').user
const Plan = require('../../models').plan

module.exports = {
    async index(req, res) {
        try {
            let users = await User.findAll({include: [{model: Plan}]})
            return res.status(200).send({ data: users })
        } catch (err) {
            return res.status(500).send({ error: err })
        }
    }
}
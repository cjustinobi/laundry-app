const { User } = require('../../models')
const { Plan } = require('../../models')

module.exports = {
    async index(req, res) {
        try {
            let users = await User.findAll({include: [{model: Plan}]})
            return res.status(200).send(users)
        } catch (err) {
            return res.status(500).send(err)
        }
    }
}
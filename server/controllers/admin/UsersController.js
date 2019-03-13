const User = require('../../models').user
const Plan = require('../../models').plan

module.exports = {
    async index(req, res) {
        try {
            let result = await User.findAll({include: [{model: Plan}]})
            return res.status(200).send(result)
        } catch (e) {console.log(e)}
    }
}

const Plan = require('../../models').plan
const Benefit = require('../../models').benefit

module.exports = {
    async index(req, res) {
        try {
            // let plans = await Plan.findAll()
            let plans = await Plan.findAll({
                include: [{
                    model: Benefit,
                    as: 'benefits',
                    attributes: ['name'],
                    through: { attributes: [] }
                }]
            })
            return res.status(200).send(plans)
        } catch (err) {
            return res.status(500).send(err)
        }
    },

    async store(req, res) {
        try {
            let plan = await Plan.create({
                name: req.body.name,
                price: req.body.price
            })
            plan.setBenefits(req.body.benefits)
            return res.status(201).send(plan)
        } catch (e) {
            return res.status(400).send({ error: `error occurred creating plan ${e.message}`})
        }

    }
}
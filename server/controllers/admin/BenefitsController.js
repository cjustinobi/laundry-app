
const Benefit = require('../../models').benefit

module.exports = {
    async index(req, res) {
        try {
            let benefits = await Benefit.findAll()
            return res.status(200).send(benefits)
        } catch (err) {
            return res.status(500).send(err)
        }
    },

    async store(req, res) {
        try {
            let benefit = await Benefit.bulkCreate(req.body.benefits)
            return res.status(201).send(benefit)
        } catch (e) {
            return res.status(400).send({ error: 'error occurred creating benefit ' + e.message})
        }

    }
}
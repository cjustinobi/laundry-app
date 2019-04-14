const Category = require('../../models').category

module.exports = {
    async index(req, res) {
        try {
            let categories = await Category.findAll()
            return res.status(200).send(categories)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    },

    async store(req, res) {
        try {
            let category = await Category.bulkCreate(req.body.categories)
            return res.status(201).send(category)
        } catch (err) {
            return res.status(400).send(err.message)
        }

    }
}
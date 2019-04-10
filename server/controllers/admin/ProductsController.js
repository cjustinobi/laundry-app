const Product = require('../../models').product

module.exports = {
    async index(req, res) {
        try {
            let products = await Product.findAll()
            return res.status(200).send(products)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    },

    async store(req, res) {
        try {
            let product = await Product.create({
                name: req.body.name,
                price: req.body.price,
                product_id: req.body.category_id
            })
            return res.status(201).send(product)
        } catch (e) {
            return res.status(400).send(e.message)
        }

    }
}
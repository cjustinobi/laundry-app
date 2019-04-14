const sharp = require ('sharp')
const fs = require('fs')

const Product = require('../../models').product
const Category = require('../../models').category

module.exports = {
    async index(req, res) {
        try {
            let products = await Product.findAll({ include: [{ model: Category }]})
            return res.status(200).send(products)
        } catch (err) {
            return res.status(500).send(err.message)
        }
    },

    async store(req, res) {
        return req.file.originalName
        try {
            let result = await sharp(req.file.path)
                .resize(300)
                .background('red')
                .embed()
                .toFile(`./assets/uploads/products/${req.file.originalName}`)

            fs.unlink(req.file.path, () => {
                console.log('file unlinked')
            })
            return res.status(201).send(result)
        } catch (err) {
            return err
        }
        /*try {
            let product = await Product.create({
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category_id
            })
            return res.status(201).send(product)
        } catch (e) {
            return res.status(400).send(e.message)
        }*/

    },

    destroy(req, res) {
        return Product
            .findById(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'Product Not Found',
                    });
                }
                return product
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
}
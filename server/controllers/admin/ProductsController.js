

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
        let filePath = req.file.path.replace('static\\', '\\')
        try {
            let product = await Product.create({
                name: req.body.name,
                price: req.body.price,
                file_path: filePath,
                category_id: req.body.category_id
            },
            // {include: [{model: Category}]}
        )

            return res.status(201).send(product)

        } catch (err) {
            return err
        }
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
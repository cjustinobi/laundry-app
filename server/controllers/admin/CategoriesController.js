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

    },

    destroy(req, res) {
        return Category
            .findById(req.params.id)
            .then(category => {
                if (!category) {
                    return res.status(400).send({
                        message: 'category not found',
                    });
                }
                return category
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
}
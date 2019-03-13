
const { packages } = require('../../../store/packages')

module.exports = {
    async store(req, res) {
        try {
            let result = await packages.create({
                name: req.body.name,
                price: req.body.price
            })
            return res.status(201).send(result)
        } catch (e) {
            return res.status(400).send({ error: 'error occured creating package'})
        }

    }
}
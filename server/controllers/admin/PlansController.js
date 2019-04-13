
const Plan = require('../../models').plan
const Benefit = require('../../models').benefit
const PlanBenefit = require('../../models').benefit_plan


module.exports = {
    async index(req, res) {
        try {
            let plans = await Plan.findAll({include: [{ model: Benefit }]})
            return res.status(200).send(plans)
        } catch (err) {
            return res.status(500).send(err.message)
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
    },

    update(req, res) {
        return Plan.findByPk(req.params.id).then((planInstance) => {
            return planInstance.update({name: req.body.name, price: req.body.price}).then((self) => {
                return res.status(200).send(self)
            })
        }).catch(err => res.status(500).send(err))
        /*Plan.update({name: req.body.name, price: req.body.price}, { where: { id: req.params.id } })
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))*/
    },

    destroy(req, res) {
        return Plan
            .findById(req.params.id)
            .then(plan => {
                if (!plan) {
                    return res.status(400).send({
                        message: 'Plan Not Found',
                    });
                }
                return plan
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
}
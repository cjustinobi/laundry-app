
const Plan = require('../../models').plan
const Benefit = require('../../models').benefit
const PlanBenefit = require('../../models').benefit_plan


module.exports = {
    async index(req, res) {
        try {
            let plans = await Plan.findAll({
                include: [
                    { model: Benefit }
                ]
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

    },

    update(req, res) {
        /*await Plan.findOne({ where: req.params.id }).on('success', async function(plan) {
            await Benefit.findAll({where: {id: req.body.benefits}}).on('success', function(benefit){
                plan.setBenefits(benefit)
                return res.status(201).send('successful')
            })
        })*/
        Plan.update({name: req.body.name, price: req.body.price}, { where: { id: req.params.id } })
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send(err))
    },

    async destroy(req, res) {
        return await Plan
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
const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            fullname: Joi.string().min(3).required(),
            email: Joi.string().email(),
            phone: Joi.string(),
            plan_id: Joi.number(),
            password: Joi.string().min(6).max(16).required()
        }

        const { error, value } = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({error: 'email is invalid'})
                    break
                case 'fullname':
                    res.status(400).send({error: 'full name is too short'})
                    break
                case 'phone':
                    res.status(400).send({error: 'invalid phone number'})
                    break
                case 'plan_id':
                    res.status(400).send({error: JSON.stringify(error.details[0].context)})
                    break
                case 'password':
                    res.status(400).send({error: 'password should a valid and minimum of 6 characters'})
                    break
                default:
                    res.status(400).send({error: 'invalid registration information'})
            }
        } else {
            next()
        }

    }
}
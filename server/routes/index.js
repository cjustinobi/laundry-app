
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const Middleware = require('../middleware')

const LoginController = require('../controllers').login
const RegisterController = require('../controllers').register

const PlansController = require('../controllers').plans
const BenefitsController = require('../controllers').benefits
const UsersController = require('../controllers').users


module.exports = (app) => {
    app.post('/api/login', LoginController.login)
    app.post('/api/register', AuthenticationControllerPolicy.register, RegisterController.register)

    app.get('/api/plans', PlansController.index)
    app.post('/api/plans', Middleware.isAdmin, PlansController.store)
    app.put('/api/plans/:id', Middleware.isAdmin, PlansController.update)
    app.delete('/api/plans/:id', Middleware.isAdmin, PlansController.destroy)

    app.get('/api/benefits', BenefitsController.index)
    app.post('/api/benefits', Middleware.isAdmin, BenefitsController.store)
    // app.delete('/api/benefits/:id', Middleware.isAdmin, BenefitsController.destroy)

    app.get('/api/users', Middleware.isAdmin, UsersController.index)
}
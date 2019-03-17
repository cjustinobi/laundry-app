
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const LoginController = require('../controllers').login
const RegisterController = require('../controllers').register
const PlansController = require('../controllers').plan
const UsersController = require('../controllers').index


module.exports = (app) => {
    app.post('/api/login', LoginController.login)
    app.post('/api/register', AuthenticationControllerPolicy.register, RegisterController.register)
    app.post('/api/plans', PlansController.store)
    app.get('/api/plans', PlansController.index)
    app.get('/api/users', UsersController.index)
}
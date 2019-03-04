
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const LoginController = require('../controllers').login
const RegisterController = require('../controllers').register


module.exports = (app) => {
    app.post('/api/login', LoginController.login)
    app.post('/api/register', AuthenticationControllerPolicy.register, RegisterController.register)
}
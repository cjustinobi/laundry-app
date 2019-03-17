
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const LoginController = require('../controllers').login
const RegisterController = require('../controllers').register
const PackageController = require('../controllers').plan
const UsersController = require('../controllers').users


module.exports = (app) => {
    app.post('/api/login', LoginController.login)
    app.post('/api/register', AuthenticationControllerPolicy.register, RegisterController.register)
    app.post('/api/packages', PackageController.store)
    app.get('/api/users', UsersController.index)
}
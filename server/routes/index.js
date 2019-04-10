
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const Middleware = require('../middleware')

const LoginController = require('../controllers').login
const RegisterController = require('../controllers').register

const ProductsController = require('../controllers').products
const CategoriesController = require('../controllers').categories
const PlansController = require('../controllers').plans
const BenefitsController = require('../controllers').benefits
const UsersController = require('../controllers').users


module.exports = (app) => {
    app.post('/api/login', LoginController.login)
    app.post('/api/register', AuthenticationControllerPolicy.register, RegisterController.register)

    app.get('/api/products', ProductsController.index)
    app.post('/api/products', Middleware.isAdmin, ProductsController.store)

    app.get('/api/categories', CategoriesController.index)
    app.post('/api/categories', Middleware.isAdmin, CategoriesController.store)

    app.get('/api/plans', PlansController.index)
    app.post('/api/plans', Middleware.isAdmin, PlansController.store)

    app.get('/api/benefits', BenefitsController.index)
    app.post('/api/benefits', Middleware.isAdmin, BenefitsController.store)

    app.get('/api/users', Middleware.isAdmin, UsersController.index)
}
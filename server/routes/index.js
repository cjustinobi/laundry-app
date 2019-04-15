
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const { isAdmin } = require('../middleware')
const { upload } = require('../config/multer')

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
    app.post('/api/products', isAdmin, upload.single('file'), ProductsController.store)
    app.delete('/api/products/:id', isAdmin, ProductsController.destroy)

    app.get('/api/categories', CategoriesController.index)
    app.post('/api/categories', isAdmin, CategoriesController.store)

    app.get('/api/plans', PlansController.index)
    app.post('/api/plans', isAdmin, PlansController.store)
    app.put('/api/plans/:id', isAdmin, PlansController.update)
    app.delete('/api/plans/:id', isAdmin, PlansController.destroy)

    app.get('/api/benefits', BenefitsController.index)
    app.post('/api/benefits', isAdmin, BenefitsController.store)
    // app.delete('/api/benefits/:id', Middleware.isAdmin, BenefitsController.destroy)

    app.get('/api/users', isAdmin, UsersController.index)
}
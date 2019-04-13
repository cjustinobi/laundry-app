
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const Middleware = require('../middleware')

const multer = require('multer')

const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error('wrong file type')
        error.code = 'LIMIT_FILE_TYPES'
        return cb(error, false)
    }
    cb(null, true)
}

const upload = multer({
    dest: './uploads/',
    fileFilter
})

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
    app.post('/api/products', Middleware.isAdmin, upload.single('file'), ProductsController.store)
    app.delete('/api/products/:id', Middleware.isAdmin, ProductsController.destroy)

    app.get('/api/categories', CategoriesController.index)
    app.post('/api/categories', Middleware.isAdmin, CategoriesController.store)

    app.get('/api/plans', PlansController.index)
    app.post('/api/plans', Middleware.isAdmin, PlansController.store)
    app.put('/api/plans/:id', Middleware.isAdmin, PlansController.update)
    app.delete('/api/plans/:id', Middleware.isAdmin, PlansController.destroy)

    app.get('/api/benefits', BenefitsController.index)
    app.post('/api/benefits', Middleware.isAdmin, BenefitsController.store)
    // app.delete('/api/benefits/:id', Middleware.isAdmin, BenefitsController.destroy)

    app.get('/api/users', Middleware.isAdmin, UsersController.index)
}
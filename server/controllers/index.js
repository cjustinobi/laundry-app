const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')

const products = require('./admin/ProductsController')
const categories = require('./admin/CategoriesController')
const plans = require('./admin/PlansController')
const benefits = require('./admin/BenefitsController')
const users = require('./admin/UsersController')

module.exports = {
    login,
    register,
    products,
    categories,
    plans,
    benefits,
    users
}
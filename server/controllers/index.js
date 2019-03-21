const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')

const plans = require('./admin/PlansController')
const benefits = require('./admin/BenefitsController')
const users = require('./admin/UsersController')

module.exports = {
    login,
    register,
    plans,
    benefits,
    users
}
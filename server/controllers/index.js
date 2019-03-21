const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')

const plans = require('./admin/PlansController')
const users = require('./admin/UsersController')

module.exports = {
    login,
    register,
    plans,
    users
}
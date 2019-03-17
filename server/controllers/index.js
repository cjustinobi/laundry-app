const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')
const plan = require('./admin/PlansController')
const index = require('./admin/UsersController')

module.exports = {
    login,
    register,
    plan,
    index
}
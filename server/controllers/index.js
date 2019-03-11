const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')
const plan = require('./admin/PackagesController')
const index = require('./admin/UsersController')

module.exports = {
    login,
    register,
    plan,
    index
}
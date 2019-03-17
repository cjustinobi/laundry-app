const login = require('./guest/LoginController')
const register = require('./guest/RegisterController')
const plan = require('./admin/PackagesController')
const users = require('./admin/UsersController')

module.exports = {
    login,
    register,
    plan,
    users
}
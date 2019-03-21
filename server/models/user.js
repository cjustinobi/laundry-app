// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const bcrypt = require('bcrypt')
const saltRounds = 10


function hashPassword(user, options) {

    if (!user.changed('password')) { return }
    console.log('about hashing the password')
    return bcrypt.hash(user.password, saltRounds)
        .then(hash => user.setDataValue('password', hash))
}

// 'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        user_type: DataTypes.INTEGER,
        plan_id: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    /*user.prototype.comparePassword = async function (password) {
        console.log('this password ' + this.password)
        return await bcrypt.compare(password, this.password)
    }*/

    User.associate = function(models) {
        User.belongsTo(models.plan)
    }

    return User
}
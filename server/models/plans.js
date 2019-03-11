'use strict'
module.exports = (sequelize, DataTypes) => {
    const plan = sequelize.define('plan', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {})

    plan.associate = function(models) {
        plan.hasOne(models.user, {
            foreignKey: {
                field: 'plan_id'
            }
        })
    }

    return plan
};
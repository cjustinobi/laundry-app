'use strict'
module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define('plan', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {})

    Plan.associate = function(models) {
        Plan.hasOne(models.user, {
            foreignKey: {
                field: 'plan_id'
            }
        })
        Plan.belongsToMany(models.benefit, {
            through: 'benefit_plans',
            as: 'benefits',
            foreignKey: 'plan_id'
        })
    }

    return Plan
};
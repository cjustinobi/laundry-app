'use strict'
module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define('Plan', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {})

    Plan.associate = function(models) {
        Plan.hasOne(models.User, {
            foreignKey: {
                field: 'plan_id'
            }
        })
        Plan.belongsToMany(models.Benefit, {
            through: 'BenefitPlan',
            as: 'benefits',
            foreignKey: {
                field: 'plan_id'
            }
        })
    }

    return Plan
};
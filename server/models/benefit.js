'use strict';

const BenefitPlan = require('../models').benefit_plan

module.exports = (sequelize, DataTypes) => {
  const Benefit = sequelize.define('benefit', {
    name: DataTypes.STRING
  }, {});
  Benefit.associate = function(models) {
      Benefit.belongsToMany(models.plan, {
          through: 'benefit_plans',
          as: 'plans',
          foreignKey: {
              field: 'benefit_id'
          }
      })
  };
  return Benefit;
};
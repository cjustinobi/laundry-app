'use strict';
module.exports = (sequelize, DataTypes) => {
  const BenefitPlan = sequelize.define('benefit_plan', {
    benefit_id: DataTypes.INTEGER,
    plan_id: DataTypes.INTEGER,
  }, {});
  BenefitPlan.associate = function(models) {
    // associations can be defined here
  };
  return BenefitPlan;
};
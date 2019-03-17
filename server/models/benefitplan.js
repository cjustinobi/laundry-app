'use strict';
module.exports = (sequelize, DataTypes) => {
  const BenefitPlan = sequelize.define('BenefitPlan', {
    benefit_id: DataTypes.INTEGER,
    plan_id: DataTypes.INTEGER,
  }, {});
  BenefitPlan.associate = function(models) {
    // associations can be defined here
  };
  return BenefitPlan;
};
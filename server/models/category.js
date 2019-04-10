'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.product, {foreignKey: 'category_id'})
  };
  return Category;
};
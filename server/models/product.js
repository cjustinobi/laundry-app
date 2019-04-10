'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.category, { foreignKey: 'category_id' })
  };
  return Product;
};
'use strict'
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            file_path: DataTypes.STRING,
            category_id: DataTypes.INTEGER
        },
        {
            underscored: true
        }
    )
    Product.associate = function(models) {
        Product.belongsTo(models.category)
    }
    return Product
}
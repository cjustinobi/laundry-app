'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
            name: DataTypes.STRING
        },
        {
            // underscored: true
        }
    );
    Category.associate = function(models) {
        Category.hasMany(models.product,{foreignKey: {field: 'category_id'}})
    };
    return Category;
};
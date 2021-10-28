module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Categories",
        {
            // Configuraciones de las columnas.
            category_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            category_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'categories',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });

    Category.associate = function(models) {
    
        Category.belongsToMany(models.Product, {
                as: 'products',
                through: 'products_categories',
                foreignKey: 'category_id',
                otherKey: 'product_id',
                timestamps: false
            });

    }
    return Category;
}

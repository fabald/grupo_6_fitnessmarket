module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define("ProductsCategories",
        {
            // Configuraciones de las columnas.
            products_categories_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'products_categories',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    return ProductCategory;
}

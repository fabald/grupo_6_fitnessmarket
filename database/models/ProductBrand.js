module.exports = (sequelize, DataTypes) => {
    const ProductBrand = sequelize.define("ProductBrands",
        {
            // Configuraciones de las columnas.
            products_brands_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            brand_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'products_brands',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    return ProductBrand;
}

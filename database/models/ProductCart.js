module.exports = (sequelize, DataTypes) => {
    const ProductCart = sequelize.define("ProductCarts",
        {
            // Configuraciones de las columnas.
            product_cart_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_cart: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'product_cart',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    return ProductCart;
}

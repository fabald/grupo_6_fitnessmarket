module.exports = (sequelize, DataTypes) => {
    const ProductCart = sequelize.define("ProductCart",
        {
            // Configuraciones de las columnas.
            product_cart_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cart_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id: {
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

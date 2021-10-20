module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart",
        {
            // Configuraciones de las columnas.
            cart_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cart_user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cart_product_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            total: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        },
        {
            tableName: 'cart',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    return Cart;
}

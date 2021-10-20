module.exports = (sequelize, DataTypes) => {
    const ItemCart = sequelize.define("ItemCarts",
        {
            // Configuraciones de las columnas.
            items_cart_id: {
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
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'items_cart',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    return ItemCart;
}

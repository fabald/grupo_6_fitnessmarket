module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart",
        {
            // Configuraciones de las columnas.
            cart_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            buyer_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            buy_date: {
                type: DataTypes.DATE,
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
    
    Cart.associate = function(models) {
    
            Cart.belongsToMany(models.Product, {
                    as: 'products',
                    through: 'product_cart',
                    foreignKey: 'cart_id',
                    otherKey: 'product_id',
                    timestamps: false
                });
    
        }
    return Cart;
}
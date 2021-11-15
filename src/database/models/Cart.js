module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart",
        {
            // Configuraciones de las columnas.
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            buy_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            total: {
                type: DataTypes.DECIMAL(6,2),
                allowNull: false
            }
        },
        {
            tableName: 'carts',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });
    
    Cart.associate = function(models) {

            Cart.belongsTo(models.User, {
                as: "users",
                foreignKey: "user_id"
            })
    
            Cart.belongsToMany(models.Product, {
                    as: 'products',
                    through: 'product_carts',
                    foreignKey: 'cart_id',
                    otherKey: 'product_id',
                    timestamps: false
                });
    
        }
    return Cart;
}

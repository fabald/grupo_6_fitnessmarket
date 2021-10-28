module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product",
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
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.INTEGER
            },
            brand_name: {
                type: DataTypes.STRING
            },
            product_img: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'products',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });

    Product.associate = function(models) {

        Product.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        });

        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'category_id',
        });
        
        Product.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'product_cart',
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: false
        })
    }

    return Product;
}



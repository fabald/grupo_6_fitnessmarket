module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Products",
        {
            // Configuraciones de las columnas.
            product_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
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
            shipment_type: {
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

        Product.belongsToMany(models.Category, {
            as: 'categories',
            through: 'products_categories',
            foreignKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false
        });

        Product.belongsToMany(models.Brand, {
            as: 'brands',
            through: 'products_brands',
            foreignKey: 'product_id',
            otherKey: 'brand_id',
            timestamps: false
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



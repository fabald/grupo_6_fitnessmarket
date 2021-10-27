module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("Brands",
        {
            // Configuraciones de las columnas.
            brand_id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            brand_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'brands',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });

    Brand.associate = function(models) {
    
            Brand.belongsToMany(models.Product, {
                    as: 'products',
                    through: 'products_brands',
                    foreignKey: 'brand_id',
                    otherKey: 'product_id',
                    timestamps: false
                });
    
    }
    return Brand;
}

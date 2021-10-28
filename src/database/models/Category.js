module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category",
        {
            // Configuraciones de las columnas.
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'categories',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });

    Category.associate = function(models) {
    
        Category.hasMany(models.Product, {
                as: 'products',
                foreignKey: 'category_id'
            });

    }
    return Category;
}

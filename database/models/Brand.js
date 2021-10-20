module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("Brands",
        {
            // Configuraciones de las columnas.
            brand_Id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name_name: {
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
    return Brand;
}

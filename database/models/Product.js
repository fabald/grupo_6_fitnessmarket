module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product",
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
    return Product;
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",
        {
            // Configuraciones de las columnas.
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_img: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'users',
            //Si el nombre de la tabla no coincide con el del modelo
            timestamps: false,
            //Si no tengo timestamps
        });

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'user_id'
        })
    }

    return User;
}
module.exports = (sequelize, DataTypes) => {

    let alias = 'Generos';

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
        name: {
            type: DataTypes.STRING,
        },
        ranking: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    };

    let config = {
        tableName: 'genres',
        timestamps: true,
    };

    const Genero = sequelize.define(alias, cols, config);

    return Genero;
}
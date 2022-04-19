module.exports = (sequelize, DataTypes) => {

    let alias = 'Peliculas';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT.UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    };

    let config = {
        tableName: 'movies',
        timestamps: true,
    };

    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;
}
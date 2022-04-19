const db = require('../database/models');

const moviesController = {
    list: (req, res) => {
        db.Peliculas.findAll()
            .then((moviesResult) => {
                res.render('moviesList',{
                    movies: moviesResult,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

module.exports = moviesController;
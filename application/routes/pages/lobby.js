const express = require('express');
const router = express.Router();
const Games = require('../../db/games');

router.get('/', (request, response) => {
    Games.gameList()
    .then((games) => {
        response.render('lobby', { games });
    })
    .catch((error) => {
        console.log(error);
    })
});

module.exports = router;
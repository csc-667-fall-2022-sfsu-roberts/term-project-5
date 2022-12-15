const express = require('express');
const router = express.Router();
const Games = require('../../db/games');

router.get("/", (request, response) => {
    const { userId } = request.session;

    Games.gamesJoined(userId)
    .then((joinedGames) => {
        console.log(joinedGames);
        response.render('continue', { joinedGames });
    })
    .catch((error) => {
        console.log(error);
    })
})


module.exports = router;
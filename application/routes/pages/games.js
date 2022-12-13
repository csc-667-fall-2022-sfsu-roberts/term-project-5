const express = require('express');
const router = express.Router();
const Games = require('../../db/games');

router.get('/:id', (request, response) => {
    const { id } = request.params;
    response.render('game', { id });
})

module.exports = router;
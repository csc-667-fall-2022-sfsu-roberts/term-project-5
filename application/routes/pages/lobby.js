const express = require('express');
const router = express.Router();
const protect = require('../../app-config/protect');


router.get('/', protect, (request, response) => {
    response.render('lobby');
});

module.exports = router;
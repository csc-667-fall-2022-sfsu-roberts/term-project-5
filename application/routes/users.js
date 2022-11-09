var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (request, response) => {
  /* IMPLEMENT SIGN UP */
})

module.exports = router;

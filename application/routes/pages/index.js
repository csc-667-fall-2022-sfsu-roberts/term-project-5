var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.render('landing', { title: 'Express' });
});

module.exports = router;

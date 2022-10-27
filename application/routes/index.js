var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.render('landing', { title: 'Express' });
});

router.get('/login', (request, response) => {
  response.render('test', { title: 'Login' });
})

router.get('/registration', (request, response) => {
  response.render('registration', {title: 'Registration'});
})


module.exports = router;

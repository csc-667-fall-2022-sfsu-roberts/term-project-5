var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.render('landing', { title: 'Express' });
});

router.get('/signup', (request, response) => {
  response.render('signup', { title: 'Sign Up' });
})

router.get('/registration', (request, response) => {
  response.render('registration', {title: 'Registration'});
})
router.get('/chat', (request, response) => {
  response.render('chat', {title: 'chat'});
})


module.exports = router;

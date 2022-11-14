var express = require('express');
var router = express.Router();

router.get('/signup', (request, response) => {
    response.render('signup', { title: 'Sign Up' });
})

router.post('/signup', (request, response) => {
    const {username, password} = request.body;
  
    console.log('test');
    console.log({signup_username, signup_password});
    response.redirect('/');
})

router.post('/signin', (request, response) => {
    const {signin_email, signin_password} = request.body;

    console.log({signin_email, signin_password});
    response.redirect('/');
})

module.exports = router;
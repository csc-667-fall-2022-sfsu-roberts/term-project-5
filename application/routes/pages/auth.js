const express = require('express');
const router = express.Router();

router.get('/signup', (request, response) => {
    response.render('signup', { title: 'Sign Up' });
})

router.post('/signup', (request, response) => {
    const {signup_username, signup_password} = request.body;
  
    console.log('test');
    console.log({signup_username, signup_password});
    response.redirect('/');
})

router.post('/signin', (request, response) => {
    const {signin_username, signin_password} = request.body;

    console.log({signin_username, signin_password});

    request.session.authenticated = true;
    request.session.username = signin_username;

    response.redirect('/');
})

module.exports = router;
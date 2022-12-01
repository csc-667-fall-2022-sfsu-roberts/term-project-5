const express = require('express');
const router = express.Router();
const Users = require('../../db/users');

router.get('/signup', (request, response) => {
    response.render('signup', { title: 'Sign Up' });
})

router.post('/signup', (request, response) => {
    const { signup_username, signup_email, signup_password } = request.body;

    Users.signup( signup_username, signup_email, signup_password )
    .then(({ username }) => {
        request.session.authenticated = true;
        request.session.username = username;

        response.redirect('/');
    })
    .catch((error) => {
        console.log(error);
        response.redirect('/auth/signup');
    })
    
})

router.post('/signin', (request, response) => {
    const { signin_username, signin_password } = request.body;

    Users.signin( signin_username, signin_password )
    .then(({ username }) => {
        request.session.authenticated = true;
        request.session.username = username;

        response.redirect('/');
    })
    .catch((error) => {
        console.log(error);
        response.redirect('/auth/signup');
    })
})

router.post('/signout', (request, response) => {
    request.session.destroy((error) => {
        if (error) {
            console.log("session cannot be destroyed");
            next(error);
        } else {
            console.log("session was destroyed");
            response.clearCookie("csid");
            response.json({ status: "OK", message: "User is logged out" });
        }
    })
})

module.exports = router;
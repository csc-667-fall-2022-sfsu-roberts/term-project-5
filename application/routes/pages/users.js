const express = require('express');
const router = express.Router();
const db = require('../../db');

/* GET users listing. */
router.get('/', (request, response) => {
  response.send('respond with a resource');
});



router.get('/testget', (request, response) => {
  /* IMPLEMENT SIGN UP */
  // store username, email, pw, confirm pw

  // see if username is taken
  // if so, exit

  // see if email is taken
  // if so, exit

  // insert new user into new table
  // check if user has been added
  // if so, redirect to login
  // if not return 500

  // let username = request.body.signup_username;
  // let email = request.body.signup_email;
  // let password = request.body.signup_password;
  // let confirm = request.body.signup_confirm;

  db.any(`SELECT * FROM users WHERE username = ?`, username)
  .then((results) => {
    response.json(results);
  })

})

module.exports = router;

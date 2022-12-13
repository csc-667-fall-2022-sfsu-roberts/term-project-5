const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  const { sessionID } = request;
  const { username } = request.session;

  response.render('landing', { username, sessionID });
});
router.get('/chat', (request, response) => {
  response.render('chat', {title: 'chat'});
});
//currently used for testing 
router.get('/cards', (request, response) => {
  response.render('cards', {title: 'cards'});
});


module.exports = router;
  
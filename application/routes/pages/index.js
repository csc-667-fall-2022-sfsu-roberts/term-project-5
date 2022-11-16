var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  const { sessionID } = request;
  const { username } = request.session;

  response.render('landing', { username, sessionID });
});

module.exports = router;

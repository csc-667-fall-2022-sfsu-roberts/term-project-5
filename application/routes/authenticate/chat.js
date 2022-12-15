const express = require("express");
const router = express.Router();

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { username } = req.session;
  const { message } = req.body;
  const { timestamp } = Date.now();

  req.app.io.emit(`chat${id}`,{username,message,timestamp});
  
  res.sendStatus(200);
});

module.exports = router;

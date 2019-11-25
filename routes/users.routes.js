const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send({
    success: true,
    users: []
  });
});

module.exports = router;

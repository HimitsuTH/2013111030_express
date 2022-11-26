var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.status(200).json({ id: 1, msg: "Hello, index" });
});

module.exports = router;

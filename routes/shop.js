const express = require("express");
let router = express.Router();
const shopController = require('../controllers/shopController');
const menuController = require('../controllers/menuController')


router.get("/", shopController.index );
router.get("/menu", menuController.index)

module.exports = router;

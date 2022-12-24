const express = require("express");
let router = express.Router();
const shopController = require('../controllers/shopController');
// const menuController = require('../controllers/menuController')


router.get("/", shopController.index );
router.get("/menu", shopController.menu)
router.get('/:id', shopController.show);

module.exports = router;

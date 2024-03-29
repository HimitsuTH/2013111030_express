const express = require("express");
let router = express.Router();
const shopController = require("../controllers/shopController");
const { body } = require("express-validator");
// const menuController = require('../controllers/menuController')

router.get("/", shopController.index);
router.get("/menu", shopController.menu);
router.get("/:id", shopController.show);
router.post("/", [
    body('name').not().isEmpty().withMessage("Please Enter your name."),
    
    body("location.lat")
      .not()
      .isEmpty()
      .withMessage("Lat in Location cannot be empty.")
      .isNumeric()
      .withMessage("Lat in Location must be a number"),
    body("location.lgn")
      .not()
      .isEmpty()
      .withMessage("Lat in Location cannot be empty.")
      .isNumeric()
      .withMessage("Lat in Location must be a number"),

], shopController.insert);

module.exports = router;

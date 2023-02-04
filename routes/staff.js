var express = require("express");
var router = express.Router();
const staffController = require("../controllers/staffController");

const passportJWT = require("../middleware/passportJWT");

const { body } = require("express-validator");

router.get("/",[passportJWT.isLogin], staffController.index);

router.get("/:id", staffController.show);

router.post("/", [
    body('name').not().isEmpty().withMessage("Please Enter your name."),
    body('salary').not().isEmpty().withMessage("Please Enter your salary.").isNumeric().withMessage("You salary is not number."),
    
], staffController.insert);

router.delete("/:id", staffController.destroy);

router.put("/:id", staffController.update);

module.exports = router;

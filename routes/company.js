const express = require("express");
let router = express.Router();
const companyController = require('../controllers/companyController')
const passportJWT = require("../middleware/passportJWT").isLogin;
const checkAdmin = require('../middleware/checkAdmin').isAdmin;


router.get("/",[passportJWT,checkAdmin], companyController.index);

router.post('/insert' , companyController.insert);

router.get('/:id', companyController.show);

router.delete('/:id', companyController.destroy);

router.put('/:id', companyController.update);

module.exports = router;

const express = require("express");
const router = express.Router();
const companyController = require('../controllers/companyController')

router.get("/", companyController.index);

router.post('/create' , companyController.create);

module.exports = router;

const express = require('express');
const router = express.Router();
const Controller = require('../controller/employeeController');
const { jwtVerify } = require('../middleware/JWT');


router.get('/',jwtVerify, Controller.getAllNewHire);

module.exports = router;
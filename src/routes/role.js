const express = require('express');
const router = express.Router();
const Controller = require('../controller/roleController');
const { jwtVerify } = require('../middleware/JWT');


router.get("/:id", jwtVerify, Controller.getRoleById);
router.get("/", jwtVerify, Controller.getAllRole);


module.exports = router;


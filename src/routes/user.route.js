const express = require('express');
const router = express.Router();
const Controller = require('../controller/userController');
const { jwtVerify } = require('../middleware/JWT');

router.post('/login', Controller.login);
router.post('/logout',jwtVerify,Controller.logout);


module.exports = router;
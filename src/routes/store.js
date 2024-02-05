const express = require('express');
const router = express.Router();
const Controller = require('../controller/storeController');
const { jwtVerify } = require('../middleware/JWT');

router.get('/', jwtVerify, Controller.getAllStore);
router.get('/:id',Controller.getStoreById);


module.exports = router;
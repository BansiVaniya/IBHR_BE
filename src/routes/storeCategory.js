const express = require('express');
const router = express.Router();
const Controller = require('../controller/storeCategoryController');
const { jwtVerify } = require('../middleware/JWT');

router.post('/create', jwtVerify, Controller.createStoreCategory);
router.get('/:id', jwtVerify, Controller.getStoreCategoryById);
router.get('/', jwtVerify, Controller.getAllStoreCategory);
router.delete('/delete/:id', jwtVerify, Controller.deleteStoreCategoryById);


module.exports = router;
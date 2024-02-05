const express = require('express');
const router = express.Router();
const Controller = require('../controller/empDesignationController');
const { jwtVerify } = require('../middleware/JWT');

router.post('/create', jwtVerify,Controller.createEmpDesignation);
router.get('/:id',jwtVerify, Controller.getEmpDesignationById);
router.get('/',jwtVerify, Controller.getAllEmpDesignation);
router.delete('/delete/:id',jwtVerify, Controller.deleteEmpDesignationById);


module.exports = router;
const express = require('express');
const router = express.Router();

// All routes file imported here
const userRoute = require('../routes/user.route');
const storeCategoryRoute = require('../routes/storeCategory');
const empDesignationRoute = require('../routes/empDesignation');
const roleRoute = require('../routes/role');
const storeRoute = require('../routes/store');
const employeeRoute = require('../routes/employee');

// All routes file uses here
router.use('/user', userRoute);
router.use('/storeCategory', storeCategoryRoute);
router.use('/empDesignation', empDesignationRoute);
router.use('/role', roleRoute);
router.use('/store',storeRoute);
router.use('/employee',employeeRoute);

module.exports = router;
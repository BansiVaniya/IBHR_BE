const db = require("../config/db.config");
const { Op, DataTypes } = require("sequelize");


require("./user");
require("./role");
require("./empDept");
require("./empDesignation");
require("./empPayRateEntity");
require("./empWorkHour");
require("./migrations");
require("./storeCategory");
require("./store_budget");
require("./user_log");
const storeModel = require("./store");
const EmpHire = require("./empHire");


//Association to get hrData in Store
storeModel.hasMany(EmpHire, {
  foreignKey: {
    name: 'empId',
    field: 'store_hr_userId' // Assuming store_hr_userId is the column name
  },
  sourceKey: 'store_hr_userId',
  as: 'hrData',
  targetKey: 'empId' // Specify the targetKey option
});


//Association to get managerData in Store
storeModel.hasMany(EmpHire, {
  foreignKey: {
    name: 'empId',
    field: 'store_manager_userId' // Assuming store_hr_userId is the column name
  },
  sourceKey: 'store_manager_userId',
  as: 'managerData',
  targetKey: 'empId' // Specify the targetKey option
});




db.sync()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("unable to connect db", err);
  });

module.exports = db;

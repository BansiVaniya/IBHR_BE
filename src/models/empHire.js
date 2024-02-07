const { DataTypes } = require("sequelize");
const db = require("../config/db.config");
const EmpDesignation = require('../models/empDesignation');
const EmpPayRateEntity = require('../models/empPayRateEntity');
const Store = require('../models/store');

const EmpHire = db.define(
  "emphire",
  {
    empId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    storeId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    onBoardStoreId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // resignReasonId: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    // },
    employeeId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    empName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('newhire', 'pending', 'requested', 'boarded'),
      allowNull: true,
      default: 'newhire',
    },
    empDesignation: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    roleId: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    storeAccess: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_hidden: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: true,
      default: '0',
    },
    empDOB: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    empTraningDate: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    empTraningEndDate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    empPhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    empEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    officeEmail: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    empResidencyVisa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    empMarital: {
      type: DataTypes.ENUM('Married', 'Single', 'Divorce', 'Single Parent'),
      allowNull: true,
    },
    empGender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    empStatus: {
      type: DataTypes.ENUM('Active', 'In-Active'),
      allowNull: true,
      default: 'Active',
    },
    DOJ: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Dependants: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    emgName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    emgEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    emgContact: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ssnNumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    lastWorkingDate: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    reasonDate: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    federal: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    tax_filling: {
      type: DataTypes.ENUM('single', 'jointly'),
      allowNull: true,
    },
    new_hire_finish: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    method_of_payment: {
      type: DataTypes.ENUM('cash', 'check', 'vendor check', 'cash+check'),
      allowNull: true,
    },
    typeOfPay: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lockStatus: {
      type: DataTypes.ENUM('locked', 'unlocked'),
      allowNull: true,
    },
    lockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lockedAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    firstTimeLogin: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: true,
      default: '0',
    },
    forgot_otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forgot_timestamp: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },

  {
    tableName: "emphire",
    timeStamps: false,
  }
);

// Define associations within EmpHire model
EmpHire.belongsTo(EmpDesignation, {
  foreignKey: 'empDesignation',
  as: 'empdesignation',
});

EmpHire.belongsTo(EmpPayRateEntity, {
  foreignKey: 'empId', // Assuming this is the foreign key in EmpHire model
  targetKey: 'empId', // Assuming this is the primary key in EmpPayRateEntity model
  as: 'empPayRateEntity' 
});

EmpPayRateEntity.belongsTo(Store, { foreignKey: 'storeId' });

EmpHire.belongsTo(Store, {
  foreignKey: 'storeId',
  as: 'store',
});

module.exports = EmpHire;

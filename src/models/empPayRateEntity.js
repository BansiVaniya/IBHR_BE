const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const EmpPayRateEntity = db.define('emppayrateentity', {
    payId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    storeId: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    empId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entity_employeeId: {
        type: DataTypes.STRING(50),
        allowNull: true
    },

    designation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    reasonId: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    method_of_payment: {
        type: DataTypes.ENUM('cash', 'check', 'vendor check', 'cash+check'),
        allowNull: true
    },
    typeOfPay: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    payPeriod: {
        type: DataTypes.STRING,
        allowNull: true
    },
    typeHour: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    hourRange: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    payRate: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    payStatus: {
        type: DataTypes.ENUM('Active', 'Deactive'),
        allowNull: false

    },
    raiseDate: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    raiseEndDate: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    raiseNote: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    modifyBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

},

    {
        tableName: 'emppayrateentity',
        timeStamps: true
    });

module.exports = EmpPayRateEntity;
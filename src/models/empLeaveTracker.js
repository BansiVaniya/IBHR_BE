const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const EmpLeaveTracker = db.define('empleavetracker', {
    iId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    benId: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    empId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    storeId: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    leaveType: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Not Approved', 'Cancel'),
        allowNull: false
    },
    bookedLeave: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    fromDate: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    toDate: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    notApprovedReason: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    document: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    statusChangedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    statusChangedAt: {
        type: DataTypes.TIME,
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
        tableName: 'empleavetracker',
        timeStamps: true
    });

module.exports = EmpLeaveTracker;
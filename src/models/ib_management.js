const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const IBManagement = db.define('ib_management', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    empHireId: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    designation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dob: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    personalEmail: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_head: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_team_member: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
},
    {
        tableName: 'ib_management',
        timeStamps: true
    });

module.exports = IBManagement;
const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const UserLog = db.define('user_log', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ip: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    empId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    payId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    log_json: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    total_time: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    log_for: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        tableName: 'user_log',
        timeStamps: true
    });

module.exports = UserLog;
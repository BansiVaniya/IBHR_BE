const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Notification = db.define('notification', {
    notificationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    notification_title: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    notification_desc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    empId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    created_by: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
    {
        tableName: 'notification',
        timeStamps: true
    });

module.exports = Notification;
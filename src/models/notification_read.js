const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const NotificationRead = db.define('notification_read', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    notificationId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_read: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    read_at: {
        type: DataTypes.TIME,
        allowNull: true
    }
},
    {
        tableName: 'notification_read',
        timeStamps: true
    });

module.exports = NotificationRead;
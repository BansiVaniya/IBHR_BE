const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Announcement = db.define('announcement', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    store_id: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER(10),
        allowNull: false

    },
},

    {
        tableName: 'announcement',
        timeStamps: true
    });

module.exports = Announcement;
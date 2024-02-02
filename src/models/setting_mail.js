const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const SettingMail = db.define('settingmail', {
    scId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    templateName: {
        type: DataTypes.STRING(251),
        allowNull: false
    },
    to: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    bcc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    reply: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    modifyBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
},
    {
        tableName: 'settingmail',
        timeStamps: true
    });

module.exports = SettingMail;
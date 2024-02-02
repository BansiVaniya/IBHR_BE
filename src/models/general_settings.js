const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const GeneralSettings = db.define('general_settings', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    parameter: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    value: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},

    {
        tableName: 'general_settings',
        timeStamps: true
    });

module.exports = GeneralSettings;
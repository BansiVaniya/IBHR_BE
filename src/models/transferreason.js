const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const TransferReason = db.define('transferreason', {
    resId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    reson: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        tableName: 'transferreason',
        timeStamps: true
    });

module.exports = TransferReason;
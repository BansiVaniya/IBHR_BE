const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const ResignReason = db.define('resignreason', {
    rrId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    resignReason: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        tableName: 'resignreason',
        timeStamps: true
    });

module.exports = ResignReason;
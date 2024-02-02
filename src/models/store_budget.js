const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const StoreBudget = db.define('store_budget', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    storeId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    //ss
    // year: {
    //     type: DataTypes.year,
    //     allowNull: true
    // },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: true
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
        tableName: 'store_budget',
        timeStamps: true
    });

module.exports = StoreBudget;
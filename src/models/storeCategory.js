const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const StoreCategory = db.define('storecategory', {
    scId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    categoryName: {
        type: DataTypes.STRING(100),
        allowNull: false
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
        tableName: 'storecategory',
        timeStamps: true
    });

module.exports = StoreCategory;
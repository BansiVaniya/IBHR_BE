const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Role = db.define('role', { 
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    roleDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_show: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        default: '1'
    },
    isActive: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        default: '1'
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'role',
    timeStamps: false
});

module.exports = Role;


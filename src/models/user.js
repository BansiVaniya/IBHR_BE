const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Users = db.define('users', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    storeId: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    empHireId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    zip: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    profileImg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updatedByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'users',
    timeStamps: true
});

module.exports = Users;
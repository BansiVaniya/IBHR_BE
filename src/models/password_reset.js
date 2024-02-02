const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const PasswordReset = db.define('password_resets', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        tableName: 'password_resets',
        timeStamps: true
    });

module.exports = PasswordReset;
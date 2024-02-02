const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const PersonalAccessToken = db.define('personal_access_tokens', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tokenable_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tokenable_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
},
    {
        tableName: 'personal_access_tokens',
        timeStamps: true
    });

module.exports = PersonalAccessToken;
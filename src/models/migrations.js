const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Migrations = db.define('migrations', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    migration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    batch: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        tableName: 'migrations',
        timeStamps: true
    });

module.exports = Migrations;
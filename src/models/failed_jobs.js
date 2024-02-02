const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const FailedJobs = db.define('failed_jobs', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    connection: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    queue: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    payload: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    exception: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    failed_at: {
        type: DataTypes.TIME,
        allowNull: false
    },

},

    {
        tableName: 'failed_jobs',
        timeStamps: true
    });

module.exports = FailedJobs;
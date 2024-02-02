const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const BirthdayCron = db.define('birthday_cron', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    emp_id: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    ib_management_id: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    confirm: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        default: '0'

    },
    is_email_fired: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email_fired_at: {
        type: DataTypes.TIME,
        allowNull: true
    },
    email_fired_data: {
        type: DataTypes.TEXT,
        allowNull: true
    },

},
    {
        tableName: 'birthday_cron',
        timeStamps: true
    });

module.exports = BirthdayCron;
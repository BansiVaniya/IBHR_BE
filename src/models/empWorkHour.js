const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const EmpWorkHour = db.define('empworkhour', {
    workId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    empId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    week: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    hour: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

},

    {
        tableName: 'empworkhour',
        timeStamps: true
    });

module.exports = EmpWorkHour;
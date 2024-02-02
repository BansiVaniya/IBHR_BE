const { DataTypes, Sequelize } = require('sequelize');
const db = require('../config/db.config');

const AnnouncementFile = db.define('announcement_files', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    announcement_id: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    original_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    aws_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        default: Sequelize.fn('now')
    },
},

    {
        tableName: 'announcement_files',
        timeStamps: true
    });

module.exports = AnnouncementFile;
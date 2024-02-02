const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Store = db.define('store', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    scId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    export_order: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    storeName: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    store_manager_userId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    store_hr_userId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    anniversary: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    storesId: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    store_email: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    store_phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    store_manager_phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    commentaa: {
        type: DataTypes.STRING(124),
        allowNull: true
    },
    hotelNickName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    store_address: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    payrollEmail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    accountantEmail: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    accountantEmailSalary: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    store_status: {
        type: DataTypes.ENUM('Active','Inactive'),
        allowNull: true,
        default: 'Active'
    },
    lat: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lng: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdByUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    modifiedByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

},
    {
        tableName: 'store',
        timeStamps: true
    });

module.exports = Store;
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
    forgot_otp: {
        type: DataTypes.STRING,
        allowNull: true
    },
    forgot_timestamp: {
        type: DataTypes.TIME,
        allowNull: true
    },
    createdByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updatedByUserId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

    created_at: {
        type: DataTypes.TIME,
        allowNull: true
    },
    created_by: {
        type: DataTypes.STRING,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.TIME,
        allowNull: true
    },

    updated_by: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        tableName: 'users',
        timeStamps: false
    
    // roleName: {
    //     type: DataTypes.STRING(60),
    //     allowNull: false
    // },
    // roleDescription: {
    //     type: DataTypes.TEXT,
    //     allowNull: false
    // },
    // is_show: {
    //     type: DataTypes.ENUM('0', '1'),
    //     allowNull: false
    // },
    // isActive: {
    //     type: DataTypes.ENUM('0', '1'),
    //     allowNull: false
    // },
    // created_by: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // updated_by: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
});

module.exports = Users;
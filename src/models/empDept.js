const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmpDepartment = db.define(
  "empdept",
  {
    dId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    empId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    depStatus: {
      type: DataTypes.ENUM('Pending', 'Complete'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Active', 'In-Active'),
      allowNull: false,
      default: 'Active',
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    deptDate: {
      type: DataTypes.STRING(251),
      allowNull: true,
    },

    returnAmountDate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    givenFrom: {
      type: DataTypes.STRING(251),
      allowNull: true,
    },
    gurantor: {
      type: DataTypes.STRING(251),
      allowNull: true,
    },
    approvedByUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    document: {
      type: DataTypes.STRING(251),
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },

  {
    tableName: "empdept",
    timeStamps: true,
  }
);

module.exports = EmpDepartment;

const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmpDesignation = db.define(
  "empdesignation",
  {
    degId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    degName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    degStatus: {
      type: DataTypes.ENUM('Active', 'Deactive'),
      allowNull: false,
      default : 'Active'
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
    tableName: "empdesignation",
    timeStamps: true,
  }
);

module.exports = EmpDesignation;

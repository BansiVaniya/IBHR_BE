const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmpBenefits = db.define(
  "empbenefits",
  {
    benId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    empId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vacation1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    vacation1Value: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    vacation2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    vacation1Value: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    paidLeave: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    unpaidLeave: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healthBenefits: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    healthBenefitsDate: {
      type: DataTypes.STRING(100),
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
    tableName: "empbenefits",
    timeStamps: true,
  }
);

module.exports = EmpBenefits;

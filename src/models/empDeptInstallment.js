const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmpDepartmentInstalment = db.define(
  "empdeptinsttalment",
  {
    insId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    paymentMode: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    receivedBy: {
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
  },

  {
    tableName: "empdeptinsttalment",
    timeStamps: true,
  }
);

module.exports = EmpDepartmentInstalment;

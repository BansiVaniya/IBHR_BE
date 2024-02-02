const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const BlockedDates = db.define(
  "blocked_dates",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fromDate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    toDate: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
    tableName: "blocked_dates",
    timeStamps: true,
  }
);

module.exports = BlockedDates;

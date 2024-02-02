const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const BirthdayEmailLogs = db.define(
  "birthday_email_logs",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    empHireId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ibManagementId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    sentType: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    emailSentData: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    emailFiredBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emailFiredAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },

  {
    tableName: "birthday_email_logs",
    timeStamps: true,
  }
);

module.exports = BirthdayEmailLogs;

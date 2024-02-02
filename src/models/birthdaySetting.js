const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const BirthdaySetting = db.define(
  "birthday_setting",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    colorGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colorCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    designation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    custom_emails: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },

  {
    tableName: "birthday_setting",
    timeStamps: true,
  }
);

module.exports = BirthdaySetting;

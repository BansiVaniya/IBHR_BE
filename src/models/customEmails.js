const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const CustomEmails = db.define(
  "custom_emails",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(350),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    module: {
      type: DataTypes.STRING(100),
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
    tableName: "custom_emails",
    timeStamps: true,
  }
);

module.exports = CustomEmails;

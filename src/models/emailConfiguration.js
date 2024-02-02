const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmailConfiguration = db.define(
  "email_configuration",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    template_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    type_of_pay: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    designation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    storeId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    store_managaer: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    store_hr: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    payroll_manager: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    accountant: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    custom_emails: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    custom_email_to: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    custom_email_cc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    custom_email_bcc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_one: {
      type: DataTypes.STRING,
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
    tableName: "email_configuration",
    timeStamps: true,
  }
);

module.exports = EmailConfiguration;

const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const BulkEmails = db.define(
  "bulk_emails",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email_subject: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    send_to: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    storeId: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },

  {
    tableName: "bulk_emails",
    timeStamps: true,
  }
);

module.exports = BulkEmails;

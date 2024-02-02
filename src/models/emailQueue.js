const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const EmailQueue = db.define(
  "email_queue",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bulkId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emailSendData: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isSent: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: true,
      default: 0,
    },
    sentAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },

  {
    tableName: "email_queue",
    timeStamps: true,
  }
);

module.exports = EmailQueue;

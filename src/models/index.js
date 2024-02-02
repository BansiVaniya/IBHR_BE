const db = require("../config/db.config");

require("./user");
require("./role");
require("./store");
require("./announcement");
require("./announcementFile");
require("./birthdayCron");
require("./birthdayEmailLogs");
require("./birthdaySetting");
require("./blockedDates");
require("./bulkEmail");
require("./customEmails");
require("./emailConfiguration");
require("./emailQueue");
require("./empBenfits");
require("./empDept");
require("./empDeptInstallment");
require("./empDesignation");
require("./empHire");
require("./empLeaveTracker");
require("./empPayRateEntity");
require("./empWorkHour");
require("./failed_jobs");
require("./general_settings");
require("./ib_management");
require("./migrations");
require("./notification");
require("./notification_read");
require("./password_reset");
require("./personalAccessToken");
require("./resign_reason");
require("./setting_mail");
require("./storeCategory");
require("./store_budget");
require("./transferreason");
require("./user_log");

db.sync()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("unable to connect db", err);
  });

module.exports = db;

const { DATE } = require('sequelize');
const UserModel = require('../models/user');
const UserLog = require('../models/user_log');
const findUserByEmail = async (email) => {
    return await UserModel.findOne({
        where: { email: email }
    })
};
const findByLoginUserId = async (id) => {
    return await UserModel.findOne({
        where: { id: id }
    })
};
const getUserRole = async (id) => {
    return await UserModel.findOne({
        where: { id: id }
    })
}

const addLogoutTime = async (userId) => {
    return await UserLog.update({ updated_at: new Date() }, { where: { user_id: userId } });
};

module.exports = {
    findUserByEmail,
    findByLoginUserId,
    getUserRole,
    addLogoutTime
}

const UserModel = require('../models/user');

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


module.exports = {
    findUserByEmail,
    findByLoginUserId,
    getUserRole
}

const UserServices = require('../services/user.service')
const userServiceInterface = new UserServices();
const methods = {};

methods.login = async (req, res) => {
    try {
        const result = await userServiceInterface.login(req.body);
     
    } catch (error) {

    }
}

module.exports = methods;
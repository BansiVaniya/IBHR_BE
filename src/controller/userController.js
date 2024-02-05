const UserServices = require('../services/user.service')
const { SuccessResponse, ErrorResponse } = require('../utils/apiResponse');
const userServiceInterface = new UserServices();
const methods = {};

methods.login = async (req, res) => {
    try {
        console.log(req.body);
        const result = await userServiceInterface.login(req.body);

        if (result.success) {
            return SuccessResponse(res, 'Login Sucessfully', result.body);
        }
        else {
            return ErrorResponse(res, result.httpStatus, result.body);
        }

    } catch (error) {
        return ErrorResponse(res, 500, error);
    }
}

module.exports = methods;
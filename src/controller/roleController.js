const RoleServices = require('../services/roleService');
const { SuccessResponse, ErrorResponse, SuccessPostResponse } = require('../utils/apiResponse');
const roleSeriveInterfaces = new RoleServices();
const methods = {};



methods.getRoleById = async (req, res) => {
  try {
    const result = await roleSeriveInterfaces.getRoleById(req.params.id);

    if (result.success) {
      return SuccessResponse(res, 'Success', result.body);
    }
    else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
}


methods.getAllRole = async (req, res) => {
  try {
    const result = await roleSeriveInterfaces.getAllRole();

    if (result.success) {
      return SuccessResponse(res, 'Sucess', result.body);
    }
    else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
}

module.exports = methods;

const EmployeeServices = require('../services/employeeService');
const { SuccessResponse, ErrorResponse, SuccessPostResponse } = require('../utils/apiResponse');
const employeeServicesInterface = new EmployeeServices();
const methods = {};



methods.getAllNewHire = async (req, res) => {
  try {
    // const data = req.body;
    const result = await employeeServicesInterface.getAllNewHire(req?.query);
    if (result.success) {
      return SuccessResponse(res, " All Employee fetched Successfully", result.body);
    } else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
};

methods.getAllRejected = async (req, res) => {
  try {
    // const data = req.body;
    const result = await employeeServicesInterface.getAllRejected(req?.query);
    if (result.success) {
      return SuccessResponse(res, " All rejected Employee fetched Successfully", result.body);
    } else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
};

methods.addNewHire = async (req, res) => {
  try {
    const userId = req.user.data.id;
    const result = await employeeServicesInterface.addNewHire(req?.body,userId);
    if (result.success) {
      return SuccessPostResponse(res, "New hire saved successfully", result.body);
    }
    else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);

  }
}


module.exports = methods;

const EmpDesignationServices = require('../services/empDesigntionService');
const { SuccessResponse, ErrorResponse, SuccessPostResponse } = require('../utils/apiResponse');
const empDesignationServicesInterface = new EmpDesignationServices();
const methods = {};


methods.createEmpDesignation = async (req, res) => {
	try {
		const userId = req.user.data.id;
		const result = await empDesignationServicesInterface.createEmpDesignation(req.body, userId);

		if (result.success) {
			return SuccessPostResponse(res, 'Employee designation created successfully', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}


methods.getEmpDesignationById = async (req, res) => {
	try {
		// const userId = req.user.data.id;
		const result = await empDesignationServicesInterface.getEmpDesignationById(req.params.id);

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


methods.getAllEmpDesignation = async (req, res) => {
	try {
		// const userId = req.user.data.id;
		const result = await empDesignationServicesInterface.getAllEmpDesignation();

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

methods.deleteEmpDesignationById = async (req, res) => {
	try {
		// const userId = req.user.data.id;
		const result = await empDesignationServicesInterface.deleteEmpDesignationById(req.params.id);

		if (result.success) {
			return SuccessResponse(res, 'Emp Designation deleted successfully', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}


module.exports = methods;
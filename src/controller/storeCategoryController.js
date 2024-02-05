const StoreCategoryServices = require('../services/storeCategoryService');
const { SuccessResponse, ErrorResponse, SuccessPostResponse } = require('../utils/apiResponse');
const storeCategoryServicesInterface = new StoreCategoryServices();
const methods = {};


methods.createStoreCategory = async (req, res) => {
	try {
		const userId = req.user.data.id;
		const result = await storeCategoryServicesInterface.createStoreCategory(req.body, userId);

		if (result.success) {
			return SuccessPostResponse(res, 'Store category created successfully', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}


methods.getStoreCategoryById = async (req, res) => {
	try {
		const result = await storeCategoryServicesInterface.getStoreCategoryById(req.params.id);

		if (result.success) {
			return SuccessPostResponse(res, 'Sucess', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}


methods.getAllStoreCategory = async (req, res) => {
	try {
		const result = await storeCategoryServicesInterface.getAllStoreCategory();

		if (result.success) {
			return SuccessPostResponse(res, 'Sucess', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}

methods.deleteStoreCategoryById = async (req, res) => {
	try {
		// const userId = req.user.data.id;
		const result = await storeCategoryServicesInterface.deleteStoreCategoryById(req.params.id);

		if (result.success) {
			return SuccessPostResponse(res, 'Store category deleted successfully', result.body);
		}
		else {
			return ErrorResponse(res, result.httpStatus, result.body);
		}

	} catch (error) {
		return ErrorResponse(res, 500, error);
	}
}


module.exports = methods;
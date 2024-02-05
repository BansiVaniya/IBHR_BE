const StoreServices = require('../services/storeService');
const { SuccessResponse, ErrorResponse, SuccessPostResponse } = require('../utils/apiResponse');
const storeServicesInterface = new StoreServices();
const methods = {};

methods.getAllStore = async (req, res) => {
  try {
    const result = await storeServicesInterface.getAllStore(req?.query);
    if (result.success) {
      return SuccessResponse(res, " All Store fetched Successfully", result.body);
    } else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }

  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
}

methods.getStoreById = async (req, res) => {
  try {
    const result = await storeServicesInterface.getStoreById(req.params.id);
    if (result.success) {
      return SuccessResponse(res, "Store fetched Successfully", result.body);
    } else {
      return ErrorResponse(res, result.httpStatus, result.body);
    }
  } catch (error) {
    return ErrorResponse(res, 500, error);

  }
}

module.exports = methods;
const SuccessResponse = (res, message, data) => {
    res.status(200).json({
        data,
        success: true,
        message,
    });
};

const SuccessPostResponse = (res, message, data) => {
    res.status(201).json({
        data,
        success: true,
        message,
    });
};

const ErrorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = {
    SuccessResponse,
    SuccessPostResponse,
    ErrorResponse
}
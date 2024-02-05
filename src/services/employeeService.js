const { getAllNewHire, getAllRejected } = require('../repository/employeeRepository');


class EmployeeServices {
	async getAllNewHire(params) {
		try {
			const result = await getAllNewHire(params);
			return { success: true, body: result };

		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error };
		}
	}

	async getAllRejected(params) {
		try {
			result = await getAllRejected(params);
			return { success: true, body: result };
		} catch (error) {
			console.log(error);
			return { success: false, httpStatus: 500, body: error };

		}
	}
}



module.exports = EmployeeServices;






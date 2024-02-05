const { createEmpDesignation, getEmpDesignationById, getAllEmpDesignation, deleteEmpDesignationById, findDegByName } = require('../repository/empDesignationRepository');


//create Api
class EmpDesignationServices {
	async createEmpDesignation(data, userId) {
		try {
			const empDesignationData = {
				degName: data.degName,
				degStatus: data.degStatus,
				createdBy: userId,
				modifyBy: userId
			}
			const deg = await findDegByName(data.degName);
			if (!deg) {
				const result = await createEmpDesignation(empDesignationData);
				return { success: true, body: result };
			} else {
				return { success: false, httpStatus: 409, body: "Emp designation already existed" };
			}

		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error };
		}

	}

	//get EmpDesignation
	async getEmpDesignationById(degId) {
		try {
			const result = await getEmpDesignationById(degId);
			return { success: true, body: result };
		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error };
		}

	}

	//get all EmpDesignation
	async getAllEmpDesignation() {
		try {
			const result = await getAllEmpDesignation();
			return { success: true, body: result };
		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error };
		}

	}

	////delete EmpDesignation
	async deleteEmpDesignationById(degId) {
		try {
			const result = await deleteEmpDesignationById(degId);
			return { success: true, body: result };
		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error };
		}

	}
}

module.exports = EmpDesignationServices;
const { getAllNewHire, addNewHire, addEmpWorkHour  , findEmployeeByEmail} = require('../repository/employeeRepository');


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

	async addNewHire(data, userId) {
		try {
			const employeeData = {
				empName: data.empName,
				empDesignation: data.empDesignation,
				empDOB: data.empDOB,
				empPhone: data.empPhone,
				empEmail: data.empEmail,
				officeEmail: data.officeEmail,
				empResidency: data.empResidency,
				empResidencyVisa: data.empResidencyVisa,
				method_of_payment: data.method_of_payment,
				typeOfPay: data.typeOfPay,
				payPeriod: data.payPeriod,
				empMarital: data.empMarital,
				empGender: data.empGender,
				federal: data.federal,
				dependants: data.dependants,
				hour: data.hour,
				storeId: data.storeId.join(','),
				empTraningDate: data.empTraningDate,
				empTraningEndDate: data.empTraningEndDate,
				note: data.note,
				empId: data.empId,
				is_email_sent: data.is_email_sent,
				action_type: data.action_type
			}
			const employee = await findEmployeeByEmail(data.empEmail);
			if (employee) {
				return { success: false, httpStatus: 409, body: "Email already exist" };
			}
			const result = await addNewHire(employeeData);
			if (result) {
				const empWorkHour = {
					empId: result.empId,
					hour: data.hour,
					created_by: userId,
					created_at: new Date()
				}
				await addEmpWorkHour(empWorkHour);
			}

			return { success: true, body: result };

		} catch (error) {
			console.log(error);
			return { success: false, httpStatus: 500, body: error };
		}
	}
}


module.exports = EmployeeServices;






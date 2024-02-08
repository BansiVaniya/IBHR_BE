const { Op, Sequelize } = require('sequelize');
const EmpHire = require('../models/empHire');
const EmpDesignation = require('../models/empDesignation');
const EmpPayRateEntity = require('../models/empPayRateEntity');
const Store = require('../models/store');
const EmpWorkHour = require('../models/empWorkHour');

const getAllNewHire = async (params) => {
	const limit = parseInt(params.limit) || 25;
	const offset = parseInt(params.offSet) || 0;

	let query = {
		limit: limit,
		offset: offset,
		where: {}
	};

	query.include = generateIncludeModels();

	query.where = {
		is_hidden: '0',
		[Op.or]: [
			{ status: 'newhire' },
			{ status: 'boarded' },
			{ status: 'resigned' }


		]
	};

	if (params?.search) {
		query.where[Op.or] = [
			{ empName: { [Op.like]: `%${params.search}%` } },
			{ '$empdesignation.degName$': { [Op.like]: `%${params.search}%` } }
		];
	}


	// Apply additional conditions based on specific parameters
	if (params?.status) {
		query.where.status = params.status;
	}

	if (params?.residential && params.hireStatus === "new") {
		query.where.empResidency = { [Op.in]: params.residential };
	}

	if (params?.residentialMaster && params.hireStatus === "master") {
		query.where.empResidency = { [Op.in]: params.residentialMaster };
	}

	if (params?.empMarital && params.hireStatus === "new") {
		query.where.empMarital = { [Op.in]: params.empMarital };
	}

	if (params?.empStatus) {
		query.where.empStatus = { [Op.in]: params.empStatus };
	}

	if (params?.status === 'resigned' || 'boarded') {
		query.include[1].where = { payStatus: 'Active' };
	}

	query.attributes = [
		'empId', 'empName', 'empDesignation', 'empResidency', 'empMarital', 'empPhone',
		'empEmail', 'status', 'doj', 'empDOB', 'address', 'city', 'zipcode', 'state',
		'empStatus', 'new_hire_finish', 'employeeId',
		[Sequelize.col('empdesignation.degName'), 'degName'],
		[Sequelize.col('empPayRateEntity.storeId'), 'storeId'],
		[Sequelize.col('Store.storeName'), 'storeName'],
		[Sequelize.col('empPayRateEntity.method_of_payment'), 'method_of_payment'],
		[Sequelize.col('empPayRateEntity.payRate'), 'payRate'],
		['storeId', 'NstoreId']
	];

	const result = await EmpHire.findAndCountAll(query);

	return result;
};



const addNewHire = async (data) => {
	return await EmpHire.create(data);

}

const addEmpWorkHour = async (data) => {
	return await EmpWorkHour.create(data);
}

const findEmployeeByEmail = async (email) => {
	return await EmpHire.findOne({
		where: { empEmail: email }
	})
};





const generateIncludeModels = () => [
	{ model: EmpDesignation, as: 'empdesignation', attributes: [] },
	{ model: EmpPayRateEntity, as: 'empPayRateEntity', attributes: [] },
	{ model: Store, as: 'store', attributes: [] }
];

module.exports = {
	getAllNewHire,
	addNewHire,
	addEmpWorkHour,
	findEmployeeByEmail
};

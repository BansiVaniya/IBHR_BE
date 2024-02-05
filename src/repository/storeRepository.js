const StoreModel = require('../models/store');
const EmpHire = require('../models/empHire');
const { Op, Sequelize } = require('sequelize');

const getAllStore = async (params) => {
  const limit = parseInt(params.limit) || 25;
  const offset = parseInt(params.offSet) || 0;

  let query = {
    limit: limit,
    offset: offset,
    where: {}
  }

  //get hrData and managerData Details
  query.include = [{

    model: EmpHire,
    as: 'hrData',
    on: {
      '$store.store_hr_userId$': Sequelize.where(
        Sequelize.fn('FIND_IN_SET', Sequelize.col('hrData.empId'), Sequelize.col('store.store_hr_userId')),
        '>', 0
      )
    },
    attributes: ['empName', 'officeEmail', 'empPhone']
  },
  {
    model: EmpHire,
    as: 'managerData',
    on: {
      '$store.store_manager_userId$': Sequelize.where(
        Sequelize.fn('FIND_IN_SET', Sequelize.col('managerData.empId'), Sequelize.col('store.store_manager_userId')),
        '>', 0
      )
    },
    attributes: ['empName', 'empEmail', 'officeEmail', 'empPhone']
  }];

//seach criteria
  if (params && params?.search) {
    query.where[Op.or] = [
      { '$storeName$': { [Op.like]: '%' + params?.search + '%' } },
      { '$storesId$': { [Op.like]: '%' + params?.search + '%' } }

    ];
  }

  if (params && (params.sort === 'desc' || params.sort === 'asc') && params.sortName) {
    query.order = [[params.sortName, params.sort]];
  }

  const result = await StoreModel.findAndCountAll(query);
  return result;
}




const getStoreById = async (storeId) => {
  const result = await StoreModel.findOne({
    where: { storeId: storeId }
  });
  return result;
}

module.exports = {
  getAllStore,
  getStoreById
}


const RoleModel = require('../models/role');


const getRoleById = async (roleId) => {
  return await RoleModel.findOne({
      where: { roleId: roleId }
  })
};
const getAllRole = async () => {
  return await RoleModel.findAll();
};

module.exports ={
  getRoleById,
  getAllRole
}

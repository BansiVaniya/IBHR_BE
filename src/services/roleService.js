const {getRoleById,getAllRole}  = require('../repository/roleRepository');

class RoleServices{
//get RoleById
async getRoleById(roleId) {
  try {
    const result = await getRoleById(roleId);
    return { success: true, body: result };
  } catch (error) {
    console.error(error);
    return { success: false, httpStatus: 500, body: error };
  }

}

//get all Role
async getAllRole() {
  try {
    const result = await getAllRole();
    return { success: true, body: result };
  } catch (error) {
    console.error(error);
    return { success: false, httpStatus: 500, body: error };
  }

}
}

module.exports = RoleServices;

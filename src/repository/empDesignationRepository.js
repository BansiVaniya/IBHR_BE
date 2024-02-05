const empDesignationModel = require('../models/empDesignation');

const createEmpDesignation = async (data) => {
    return await empDesignationModel.create(data);
}
const getEmpDesignationById = async (degId) => {
    return await empDesignationModel.findOne({
        where: { degId: degId }
    })
};
const getAllEmpDesignation = async () => {
    return await empDesignationModel.findAll();
};

const deleteEmpDesignationById = async (degId) => {
    return await empDesignationModel.destroy({ where: { degId: degId } });

};

const findDegByName = async (degName)=>{
    return await empDesignationModel.findOne({
        where : {degName:degName}
    });
}


module.exports = {
    createEmpDesignation,
    getEmpDesignationById,
    getAllEmpDesignation,
    deleteEmpDesignationById,
    findDegByName
}
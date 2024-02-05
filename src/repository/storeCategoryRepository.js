const storeCategoryModel = require('../models/storeCategory');

const createStoreCategory = async (data) => {
    return await storeCategoryModel.create(data);
}
const getStoreCategoryById = async (scId) => {
    return await storeCategoryModel.findOne({
        where: { scId: scId }
    })
};
const getAllStoreCategory = async () => {
    return await storeCategoryModel.findAll();
};

const deleteStoreCategoryById = async (scId) => {
    return await storeCategoryModel.destroy({ where: { scId: scId } });

};


module.exports = {
    createStoreCategory,
    getStoreCategoryById,
    getAllStoreCategory,
    deleteStoreCategoryById

}
const { createStoreCategory, getStoreCategoryById, getAllStoreCategory, deleteStoreCategoryById } = require('../repository/storeCategoryRepository');


//create Api
class StoreCategoryServices {
    async createStoreCategory(data, userId) {
        try {
            const storeCategoryData = {
                categoryName: data.categoryName,
                createdBy: userId,
                modifyBy: userId
            }

            const result = await createStoreCategory(storeCategoryData);
            return { success: true, body: result };
        } catch (error) {
            console.error(error);
            return { success: false, httpStatus: 500, body: error };
        }

    }

    //get StoreCategory
    async getStoreCategoryById(scId) {
        try {
            const result = await getStoreCategoryById(scId);
            return { success: true, body: result };
        } catch (error) {
            console.error(error);
            return { success: false, httpStatus: 500, body: error };
        }

    }

    //get all StoreCategory
    async getAllStoreCategory() {
        try {
            const result = await getAllStoreCategory();
            return { success: true, body: result };
        } catch (error) {
            console.error(error);
            return { success: false, httpStatus: 500, body: error };
        }

    }

    ////delete StoreCategory
    async deleteStoreCategoryById(scId) {
        try {
            const result = await deleteStoreCategoryById(scId);
            return { success: true, body: result };
        } catch (error) {
            console.error(error);
            return { success: false, httpStatus: 500, body: error };
        }

    }
}

module.exports = StoreCategoryServices;
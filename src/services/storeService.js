const { getAllStore ,getStoreById } = require('../repository/storeRepository');

class StoreServices {
  async getAllStore(params) {
    try {
      const result = await getAllStore(params);
      return { success: true, body: result };
    } catch (error) {
      console.error(error);
      return { success: false, body: error };
    }

  }

  async getStoreById(storeId) {
    try {
      const storeDetails = await getStoreById(storeId);
      return { success: true, body: storeDetails };
    } catch (error) {
      return { success: false, body: error };

    }
  }
}


module.exports = StoreServices;
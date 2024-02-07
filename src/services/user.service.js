const { findUserByEmail, addLogoutTime } = require('../repository/userRepository');
const { createToken } = require('../middleware/JWT')
const bcrypt = require('bcrypt');

class UserServices {
	async login(data) {
		try {
			const user = await findUserByEmail(data?.email);
			if (!user) {
				return { success: false, httpStatus: 404 };
			}
			const isPasswordMatched = await bcrypt.compare(data.password, user.password);
			if (!isPasswordMatched) {
				return { success: false, httpStatus: 404, body: 'Password not matched' };
			}

			const token = await createToken(user.id);
			return { success: true, body: { token, user } };
		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error }
		}
	}

	async logout(data) {
		try {
			const result = await addLogoutTime(data?.empId);
			return { success: true, body: result };
		} catch (error) {
			console.error(error);
			return { success: false, httpStatus: 500, body: error.message };
		}
	}
};

module.exports = UserServices;

const { findUserByEmail } = require('../repository/userRepository');
const { createToken } = require('../middleware/JWT')
const bcrypt = require('bcrypt');

class UserServices {
    async login(data) {
        try {
            console.log(data);
            const user = await findUserByEmail(data?.email);
            console.log(user);
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
};

module.exports = UserServices;

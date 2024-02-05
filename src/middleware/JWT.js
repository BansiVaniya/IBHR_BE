const jsonWebToken = require('jsonwebtoken');
const {findByLoginUserId} = require('../repository/userRepository');


const createToken = async (userid) => {
    const payload = {
        id: userid,
        TOKEN_AUDIENCE: process.env.TOKEN_AUDIENCE,
        TOKEN_ISSUER: process.env.TOKEN_ISSUER
    }
    const accessToken = jsonWebToken.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: payload
    }, process.env.SECRET_KEY);

    const refreshToken = jsonWebToken.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
        data: payload
    }, process.env.REFRESH_SECRET_KEY);

    return { accessToken, refreshToken }
}
/**
 * 
 * @param { Request } req 
 * @param { Response } res
 * @param { Next } next
 * @comment Checking authorization of login id.
 */
const jwtVerify = (req, res, next) => {
    try {
        const Authtoken = req.headers['authorization'];
        if (Authtoken) {
            var token = Authtoken.split(" ")[1];
        }
        if (token && token != null && token != undefined) {
            jsonWebToken.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ msg: "Unauthorized token" });
                } else {
                    req.user = decoded
                    const userid = decoded.data.id;
                    const user = await findByLoginUserId(userid);
                    if (!user) {
                        return res.status(401).json({ msg: "Unauthorized token" });
                    }
                    next();
                }
            });
        } else {
            return res.status(401).json({ msg: "Unauthorized token" });
        }
    }
    catch (error) {
        return res.status(401).json({ msg: "Unauthorized token" });
    }
};



module.exports = {
    createToken,
    jwtVerify
}
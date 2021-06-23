"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
require("dotenv").config();
function verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token)
        return res.status(403).send({ auth: false, message: "No token provided." });
    jwt.verify(token, process.env.jwtSecret, function (err, decoded) {
        if (err) {
            return res
                .status(500)
                .json({ auth: false, message: "Failed to authenticate token." });
        }
        // if everything good, save to request for use in other routes
        let credentials = decodedCredentials(decoded);
        req["credentials"] = credentials;
        next();
    });
}
function decodedCredentials(decoded) {
    const { _id, fullname, email, address, phoneNumbers } = decoded.credentials;
    return {
        _id,
        fullname,
        email,
        address,
        phoneNumbers,
    };
}
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map
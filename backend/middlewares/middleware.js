const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(403).json({
            msg: "Login Failed Please check you Email or Password"
        })
    }

    const jwtToken = token.split(" ")[1];

    try {
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        req.userId = decoded.userId
        next()
    }
    catch(e) {
        console.log("JWT verification failed:", e.message);
        return res.status(403).json({msg: "Check your Inputs"})
    }
}

module.exports = { authMiddleware }

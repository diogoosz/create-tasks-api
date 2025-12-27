const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const AuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        throw new AppError("Você precisa estar logado para realizar esta ação.", 401);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        throw new AppError("Token inválido ou expirado", 401);;
    }
};

module.exports = AuthMiddleware;
const { registerUserModel, findUserByEmail } = require("../models/authModel");
const AppError = require("../utils/appError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserService = async (userData) => {
  const { name, email, password } = userData;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new AppError("Usuário já existe", 400);
    }
    const registeredUser = await registerUserModel(newUser);
    return {
        name: registeredUser.name,
        id: registeredUser.id,
        message: "Usuário registrado com sucesso",
    }
  } catch (err) {
    throw err;
  }
};

const loginUserService = async (userData) => {
    const { email, password } = userData;
    try {
        const user = await findUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new AppError("Email ou senha incorretos", 401);
        }
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d"
            }
        )
        return {
            id: user.id,
            name: user.name,
            token: token,
            message: `Bem-vindo de volta, ${user.name}!`,
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
  registerUserService,
  loginUserService,
};

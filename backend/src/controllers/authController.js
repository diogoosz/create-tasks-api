const {
  registerUserService,
  loginUserService,
} = require("../services/authService");
const catchAsync = require("../utils/catchAsync");

const registerUserController = catchAsync(async (req, res) => {
  const registeredUser = await registerUserService(req.body);
  return res.status(201).json(registeredUser);
});

const loginUserController = catchAsync(async (req, res) => {
  const loggedUser = await loginUserService(req.body);
  return res.status(200).json(loggedUser);
});

module.exports = { registerUserController, loginUserController };

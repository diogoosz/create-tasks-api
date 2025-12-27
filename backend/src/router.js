const express = require("express");

const router = express.Router();

const authController = require("./controllers/authController");
const AuthMiddleware = require("./middlewares/authMiddleware");
const taskController = require("./controllers/taskController");
const taskMiddleware = require("./middlewares/tasksMiddleware");

router.post("/register", authController.registerUserController);
router.post("/login", authController.loginUserController);
router.get("/tasks", AuthMiddleware, taskController.getAll);
router.post("/tasks", AuthMiddleware, taskMiddleware.validateBody, taskController.createTask);
router.delete(
  "/tasks/:id",
  AuthMiddleware,
  taskMiddleware.validateDelete,
  taskController.deleteTask
);
router.put(
  "/tasks/:id",
  AuthMiddleware,
  taskMiddleware.validateBody,
  taskMiddleware.validateStatus,
  taskController.updatedTask
);

module.exports = router;

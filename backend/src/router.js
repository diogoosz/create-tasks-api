const express = require('express');

const router = express.Router();

const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateBody, taskController.createTask);
router.delete('/tasks/:id', taskMiddleware.validateDelete, taskController.deleteTask);
router.put('/tasks/:id', taskMiddleware.validateBody, taskMiddleware.validateStatus, taskController.updatedTask);

module.exports = router;
const tasksModels = require('../models/tasksModels');

const getAll =  async (req, res) => {
    const userId = req.userId;
    const tasks = await tasksModels.getAll(userId);

    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const userId = req.userId;
    const createTask = await tasksModels.createTask(req.body, userId);
    return res.status(201).json(createTask);
};

const deleteTask = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;
    await tasksModels.deleteTask(id, userId);
    return res.status(204).json();
};

const updatedTask = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;
    await tasksModels.updateTask(id, userId, req.body);
    return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updatedTask,
};
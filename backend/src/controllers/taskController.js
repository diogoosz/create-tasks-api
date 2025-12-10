const tasksModels = require('../models/tasksModels');

const getAll =  async (_req, res) => {
    const tasks = await tasksModels.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createTask = await tasksModels.createTask(req.body);
    return res.status(201).json(createTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModels.deleteTask(id);
    return res.status(204).json();
};

const updatedTask = async (req, res) => {
    const { id } = req.params;
    await tasksModels.updateTask(id, req.body);
    return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updatedTask,
};
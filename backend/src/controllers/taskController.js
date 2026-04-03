const tasksModels = require('../models/tasksModels');

const getAll =  async (req, res) => {
    const userId = req.userId;
    const tasks = await tasksModels.getAll(userId);

    return res.status(200).json(tasks);
};

const getTask = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params; 
    try {
        const task = await tasksModels.getTask(userId, id);
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada ou acesso negado.' });
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
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

const connection = require('./connection');

const getAll = async (userId) => {
    const [tasks] = await connection.execute('SELECT id, title, status, created_at FROM tasks WHERE user_id = ? AND deleted_at IS NULL', [userId]);
    return tasks;
};

const createTask = async (task, userId) => {
    const { title } = task;

    const query = 'INSERT INTO tasks (title, status, user_id) VALUES (?, ?, ?)';
    
    const [createdTask] = await connection.execute(query, [title, 'pendente', userId]);

    const taskId = createdTask.insertId;

    return {
        message: 'Tarefa criada com sucesso!', 
        taskId,
    };
};

const deleteTask = async (id, userId) => {
    const [removedTask] = await connection.execute('UPDATE tasks SET deleted_at = NOW() WHERE id = ? AND user_id = ?', [id, userId]);
    return removedTask;
};

const updateTask = async (id, userId, task) => {
    const { title, status } = task;
    
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ? AND user_id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id, userId]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};
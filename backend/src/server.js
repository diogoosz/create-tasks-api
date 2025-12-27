const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno no servidor';

    console.error(`[ERRO]: ${message}`); // Log para o desenvolvedor

    res.status(statusCode).json({
        status: 'error',
        message: message
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
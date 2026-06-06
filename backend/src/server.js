const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? 'Erro interno no servidor' : err.message;
    if (statusCode === 500) {
        console.error(`[ERRO INTERNO]:`, err); 
    } else {
        console.error(`[ERRO PREVISTO]: ${err.message}`);
    }

    res.status(statusCode).json({
        status: 'error',
        message: message
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

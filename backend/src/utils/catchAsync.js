module.exports = (fn) => {
    return (req, res, next) => {
        // Se a função der erro, o .catch(next) joga o erro para o Express tratar
        fn(req, res, next).catch(next);
    };
};
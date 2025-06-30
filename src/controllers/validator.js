exports.validateJokeId = (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 1) {
        const error = new Error('Invalid joke ID');
        error.statusCode = 400;
        throw error;
    }
    next();
};
module.exports = {
    errorHandler: (err, req, res, next) => {
        const isProd = process.env.NODE_ENV === 'production';
        const statusCode = err.statusCode || 500;
        const message = isProd && statusCode === 500
            ? 'Internal server error'
            : err.message;

        res.status(statusCode).json({
            error: message,
            ...(!isProd && { stack: err.stack })
        });
    },

    asyncHandler: (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
};
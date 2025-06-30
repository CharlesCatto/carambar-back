const app = require('./app');
const port = process.env.PORT || 10000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
    console.log('Allowed CORS origins:', [
        'https://charlescatto.github.io',
        'http://localhost:5173'
    ]);
});
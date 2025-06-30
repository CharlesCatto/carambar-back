const app = require('./app');
const port = process.env.PORT || 10000;
const host = process.env.HOST || "localhost";

app.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`);
    console.log('Allowed CORS origins:', [
        'https://charlescatto.github.io',
        'http://localhost:5173'
    ]);
});
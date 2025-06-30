import config from './config';
import app from './app';
import { sequelize } from './models';

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection OK');

    await sequelize.sync();
    console.log('Database synchronized');

    app.listen(config.port, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${config.port}`);
      console.log('Mode:', config.isProd ? 'PROD' : 'DEV');
    });
  } catch (error) {
    console.error('Failed to start:', error);
    process.exit(1);
  }
}

startServer();
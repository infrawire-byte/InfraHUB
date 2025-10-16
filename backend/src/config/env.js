const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const requiredVars = ['PORT', 'DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`Environment variable ${key} is not set.`);
  }
});

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 4000,
  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
    connectionLimit: Number(process.env.DB_POOL_LIMIT) || 10,
  },
  security: {
    jwtSecret: process.env.JWT_SECRET,
    tokenExpiry: process.env.JWT_EXPIRES_IN || '1h',
  },
  integrations: {
    useGoogleMaps: process.env.USE_GOOGLE_MAPS !== 'false',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  },
};

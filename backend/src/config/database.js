const mysql = require('mysql2/promise');
const config = require('./env');
const logger = require('../utils/logger');

let pool;

async function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      waitForConnections: true,
      connectionLimit: config.database.connectionLimit,
      queueLimit: 0,
    });

    pool.on('connection', () => {
      logger.info('MySQL connection established');
    });
  }

  return pool;
}

async function query(sql, params = []) {
  const connection = await (await getPool()).getConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows;
  } finally {
    connection.release();
  }
}

module.exports = {
  getPool,
  query,
};

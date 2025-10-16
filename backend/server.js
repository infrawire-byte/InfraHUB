const http = require('http');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./src/config/env');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');
const requestContext = require('./src/middleware/requestContext');
const logger = require('./src/utils/logger');
const initWebsocket = require('./src/ws/index');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(requestContext);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', routes);

app.use(errorHandler);

const server = http.createServer(app);
initWebsocket(server);

server.listen(config.port, () => {
  logger.info(`InfraHub backend listening on port ${config.port}`);
});

module.exports = app;

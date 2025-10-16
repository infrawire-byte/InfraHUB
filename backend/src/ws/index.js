const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const logger = require('../utils/logger');

function authenticateRequest(request) {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const token = url.searchParams.get('token');
    if (!token) {
      throw new Error('Token ausente');
    }
    const payload = jwt.verify(token, config.security.jwtSecret);
    return payload;
  } catch (error) {
    logger.warn('WS authentication failed', { error: error.message });
    return null;
  }
}

function initWebsocket(server) {
  const wss = new WebSocket.Server({ server, path: '/ws' });

  wss.on('connection', (socket, request) => {
    const user = authenticateRequest(request);
    if (!user) {
      socket.close(4401, 'Unauthorized');
      return;
    }

    socket.user = user;
    socket.send(JSON.stringify({ type: 'welcome', user: { id: user.id, roles: user.roles } }));

    socket.on('message', (raw) => {
      try {
        const payload = JSON.parse(raw.toString());
        if (payload.type === 'ping') {
          socket.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
        }
      } catch (error) {
        logger.warn('Malformed WS message', { error: error.message });
      }
    });
  });

  logger.info('WebSocket server ready');
  return wss;
}

module.exports = initWebsocket;

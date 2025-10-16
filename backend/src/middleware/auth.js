const jwt = require('jsonwebtoken');
const config = require('../config/env');
const logger = require('../utils/logger');

function authenticate(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    logger.warn('Missing auth token', { requestId: req.requestId });
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, config.security.jwtSecret);
    req.user = decoded;
    return next();
  } catch (error) {
    logger.warn('Invalid auth token', { requestId: req.requestId, error: error.message });
    return res.status(401).json({ error: 'Invalid token' });
  }
}

function hasPermission(user, moduleKey, action) {
  if (!user || !Array.isArray(user.roles)) return false;

  return user.roles.some((role) => {
    if (!role.module || !role.permissions) return false;
    if (role.module !== moduleKey && role.module !== 'global') return false;
    return role.permissions.includes(action);
  });
}

function authorize(moduleKey, action) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!hasPermission(req.user, moduleKey, action)) {
      logger.warn('Permission denied', {
        requestId: req.requestId,
        userId: req.user.id,
        moduleKey,
        action,
      });
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    return next();
  };
}

module.exports = {
  authenticate,
  authorize,
};

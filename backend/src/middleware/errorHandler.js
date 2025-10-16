const logger = require('../utils/logger');

module.exports = function errorHandler(err, req, res, next) {
  logger.error('Unhandled error', {
    requestId: req.requestId,
    error: err.message,
    stack: err.stack,
  });

  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
};

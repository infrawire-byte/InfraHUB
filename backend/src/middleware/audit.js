const logger = require('../utils/logger');

module.exports = function audit(action) {
  return (req, res, next) => {
    const { user } = req;
    const before = req.body?.before || null;
    const after = req.body?.after || null;

    res.on('finish', () => {
      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        logger.info('Audit trail', {
          requestId: req.requestId,
          userId: user?.id || null,
          action,
          method: req.method,
          path: req.originalUrl,
          status: res.statusCode,
          before,
          after,
        });
      }
    });

    next();
  };
};

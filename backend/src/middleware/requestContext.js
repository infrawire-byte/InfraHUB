const { v4: uuid } = require('uuid');

module.exports = function requestContext(req, res, next) {
  const requestId = uuid();
  req.requestId = requestId;
  res.setHeader('X-Request-Id', requestId);
  next();
};

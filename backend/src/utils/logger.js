function timestamp() {
  return new Date().toISOString();
}

function log(level, message, context = {}) {
  const payload = {
    level,
    message,
    time: timestamp(),
    ...context,
  };
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(payload));
}

module.exports = {
  info(message, context) {
    log('info', message, context);
  },
  warn(message, context) {
    log('warn', message, context);
  },
  error(message, context) {
    log('error', message, context);
  },
};

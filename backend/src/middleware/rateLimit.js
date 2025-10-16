const buckets = new Map();

module.exports = function rateLimit({ windowMs = 60_000, max = 60 } = {}) {
  return (req, res, next) => {
    const key = `${req.ip}:${req.originalUrl}`;
    const now = Date.now();
    const entry = buckets.get(key) || { count: 0, expires: now + windowMs };

    if (entry.expires < now) {
      entry.count = 0;
      entry.expires = now + windowMs;
    }

    entry.count += 1;
    buckets.set(key, entry);

    if (entry.count > max) {
      return res.status(429).json({ error: 'Too many requests' });
    }

    return next();
  };
};

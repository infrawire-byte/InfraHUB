const express = require('express');
const controller = require('../../controllers/exampleController');
const { authenticate, authorize } = require('../../middleware/auth');
const audit = require('../../middleware/audit');
const rateLimit = require('../../middleware/rateLimit');

const router = express.Router();

router.use(authenticate);

router.get('/', authorize('governanca', 'list'), rateLimit(), controller.list);
router.get('/:id', authorize('governanca', 'detail'), controller.detail);
router.post('/', authorize('governanca', 'create'), rateLimit({ max: 10, windowMs: 60_000 }), audit('module:create'), controller.create);

module.exports = router;

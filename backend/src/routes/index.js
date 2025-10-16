const express = require('express');
const exampleRoutes = require('./v1/example.routes');

const router = express.Router();

router.use('/v1/examples', exampleRoutes);

module.exports = router;

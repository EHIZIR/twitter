const { Router } = require('express');

const router = Router();

// router.use(require('./comments.route'));
router.use(require('./tweets.route'));
router.use(require('./users.route'));


module.exports = router
const { Router } = require('express');

const router = Router();

const { commentController } = require('../controllers/tweets.controller');

router.patch('/tweet/likes/:id', commentController);

module.exports = router;
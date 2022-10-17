const { Router } = require('express');

const router = Router();

const { tweetController } = require('../controllers/tweets.controller');

router.get('/tweet', tweetController.getTweet);
router.post('/tweet', tweetController.createTweet);
router.delete('/tweet', tweetController.deleteTweet);
router.patch('/tweet/likes/:id', tweetController.createLikes);
router.patch('/tweet/comment/:id', tweetController.createComment);


module.exports = router;
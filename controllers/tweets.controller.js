const { default: mongoose } = require('mongoose');
const Tweet = require('../models/Tweet.model');

module.exports.tweetController = {

    createTweet: (req, res) => {
        const {tweetText, userId} = req.body;
        Tweet.create({
            tweetText,
            userId
            }, (err, data) => {
                res.json(data)
            }
        )
    },

    deleteTweet: (req, res) => {
        Tweet.deleteOne(req.params.id, (err, data) => {
            res.json(data)
        })
    },

    getTweet: (req, res) => {
        Tweet.find({}, (err, data) => {
            res.json(data)
        }).populate(userId)
    },

    createLikes: (req, res) => {
        Tweet.findByIdAndUpdate(req.params.id, {$push: {like: req.body.userId}}, (err, data) => {
            res.json(data)
        })
    },
    createComment: (req, res) => {
        Tweet.findByIdAndUpdate(req.params.id, {$push: {Comment: req.body.userId}}, (err, data) => {
            res.json(data)
        })
    }
        
}
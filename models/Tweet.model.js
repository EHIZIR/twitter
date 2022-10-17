const mongoose = require('mongoose');

const tweetsSchema = ({
    tweetText: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    like: [],
    Comment: []
});

const Tweet = mongoose.model('Tweet', tweetsSchema);

module.exports = Tweet;
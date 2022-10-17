const mongoose = require('mongoose');

const commentsSchema = ({
    commentText: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    tweetId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet'
    }
});

const User = mongoose.model('User', commentsSchema);

module.exports = User;
const Comment = require('../models/Tweet.model');

module.exports.commentController = {

    createComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, {$push: {like: req.body.userId}}, (err, data) => {
            res.json(data)
        })
    }    
}
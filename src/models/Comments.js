var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	body: String,
	author: String,
	upvotes: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;

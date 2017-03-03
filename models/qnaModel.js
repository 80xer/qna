var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var qnaSchema = new Schema({	'createdAt' : Date,	'updatedAt' : Date,	'title' : String,	'body' : String,	'answers' : Array});

module.exports = mongoose.model('qna', qnaSchema);

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var qnaSchema = new Schema({

module.exports = mongoose.model('qna', qnaSchema);
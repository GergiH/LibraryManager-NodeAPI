var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  id: String,
  name: String
});

module.exports = mongoose.model('languages', LanguageSchema);

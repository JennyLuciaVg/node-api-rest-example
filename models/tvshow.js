var mongoose = require('mongoose');
Shema= mongoose.Schema;

var tvshowSchema = new Schema({
  title: {type: String},
  year: {type: Number},
  country: {type: String},
  poster: {type: String},
  seasons: {type: String},
  genre: {type: String, enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']},
  summary: {type: String},
});

module.exports = mongoose.model('TVShow', tvshowSchema);

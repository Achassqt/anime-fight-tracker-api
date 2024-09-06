const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;

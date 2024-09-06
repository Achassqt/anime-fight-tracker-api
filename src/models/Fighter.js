const mongoose = require('mongoose');

const FighterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  anime: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime', required: true },
  description: { type: String },
});

const Fighter = mongoose.model('Fighter', FighterSchema);

module.exports = Fighter;
const mongoose = require('mongoose');

const FightSchema = new mongoose.Schema({
  fighter1: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter', // Référence au modèle Fighter
    required: true 
  },
  fighter2: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter', // Référence au modèle Fighter
    required: true 
  },
  winner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter', // Référence au modèle Result
    required: false 
  },
  episode: { 
    type: Number, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now // Date de création du combat
  }
});

const Fight = mongoose.model('Fight', FightSchema);

module.exports = Fight;

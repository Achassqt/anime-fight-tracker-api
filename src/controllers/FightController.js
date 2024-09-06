const Fight = require('../models/Fight');
const Fighter = require('../models/Fighter');

// Créer un nouveau combat
exports.createFight = async (req, res) => {
  try {
    const { fighter1, fighter2, winner, episode } = req.body;

    // Vérifier que les personnages existent
    const char1 = await Fighter.findById(fighter1);
    const char2 = await Fighter.findById(fighter2);

    if (!char1 || !char2) {
      return res.status(404).json({ error: 'One or both fighters not found' });
    }

    // Créer le combat
    const fight = new Fight({
      fighter1,
      fighter2,
      winner: winner || null, // winner peut être null pour un match nul
      episode
    });

    await fight.save();
    res.status(201).json(fight);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les combats
exports.getAllFights = async (req, res) => {
  try {
    const fights = await Fight.find()
      .populate('fighter1', 'name')
      .populate('fighter2', 'name')
      .populate('winner', 'name');
    res.status(200).json(fights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un combat par ID
exports.getFightById = async (req, res) => {
  try {
    const fight = await Fight.findById(req.params.id)
      .populate('fighter1', 'name')
      .populate('fighter2', 'name')
      .populate('winner', 'name');
    if (!fight) return res.status(404).json({ error: 'Fight not found' });
    res.status(200).json(fight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un combat
exports.deleteFight = async (req, res) => {
  try {
    const fight = await Fight.findByIdAndDelete(req.params.id);
    if (!fight) return res.status(404).json({ error: 'Fight not found' });
    res.status(204).json({ message: 'Fight deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
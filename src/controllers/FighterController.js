const Fighter = require('../models/Fighter');

// Créer un nouveau personnage
exports.createFighter = async (req, res) => {
  try {
    const { name, anime, description } = req.body;

    // Vérifier que le personnage n'existe pas déjà
    const existingFighter = await Fighter.findOne({ name, anime });
    if (existingFighter) {
      return res.status(400).json({ error: 'Fighter already exists' });
    }

    // Créer un nouveau personnage
    const fighter = new Fighter({ name, anime, description });
    await fighter.save();

    res.status(201).json(fighter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les personnages
exports.getAllFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.status(200).json(fighters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un personnage par ID
exports.getFighterById = async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    if (!fighter) return res.status(404).json({ error: 'Fighter not found' });
    res.status(200).json(fighter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un personnage par ID
exports.updateFighter = async (req, res) => {
  try {
    const { name, anime, description } = req.body;

    // Mettre à jour le personnage
    const fighter = await Fighter.findByIdAndUpdate(
      req.params.id,
      { name, anime, description },
      { new: true, runValidators: true }
    );

    if (!fighter) return res.status(404).json({ error: 'Fighter not found' });

    res.status(200).json(fighter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un personnage par ID
exports.deleteFighter = async (req, res) => {
  try {
    const fighter = await Fighter.findByIdAndDelete(req.params.id);
    if (!fighter) return res.status(404).json({ error: 'Fighter not found' });
    res.status(204).json({ message: 'Fighter deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

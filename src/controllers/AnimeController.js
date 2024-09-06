const Anime = require('../models/Anime');

// Créer un nouvel anime
exports.createAnime = async (req, res) => {
  try {
    const { title } = req.body;

    // Vérifier que l'anime n'existe pas déjà
    const existingAnime = await Anime.findOne({ title });
    if (existingAnime) {
      return res.status(400).json({ error: 'Anime already exists' });
    }

    const anime = new Anime({ title });
    await anime.save();

    res.status(201).json(anime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les animes
exports.getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un anime par ID
exports.deleteAnime = async (req, res) => {
  try {
    const anime = await Anime.findByIdAndDelete(req.params.id);
    if (!anime) return res.status(404).json({ error: 'Anime not found' });
    res.status(204).json({ message: 'Anime deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const AnimeController = require('../controllers/AnimeController');

router.post('/', AnimeController.createAnime);
router.get('/', AnimeController.getAllAnimes);
router.delete('/:id', AnimeController.deleteAnime);

module.exports = router;
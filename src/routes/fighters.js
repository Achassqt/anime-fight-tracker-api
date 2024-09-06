const express = require('express');
const router = express.Router();
const FighterController = require('../controllers/FighterController');

// Routes pour les personnages
router.post('/', FighterController.createFighter);
router.get('/', FighterController.getAllFighters);
router.get('/:id', FighterController.getFighterById);
router.put('/:id', FighterController.updateFighter);
router.delete('/:id', FighterController.deleteFighter);

module.exports = router;
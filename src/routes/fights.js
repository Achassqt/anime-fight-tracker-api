const express = require('express');
const router = express.Router();
const FightController = require('../controllers/FightController');

router.post('/', FightController.createFight);
router.get('/', FightController.getAllFights);
router.get('/:id', FightController.getFightById);
router.delete('/:id', FightController.deleteFight);

module.exports = router;
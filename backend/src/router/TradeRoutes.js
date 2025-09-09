const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeControllers');

router.get('/', tradeController.getAllTradesHandler);         
router.get('/:id', tradeController.getTradeByIdHandler);      
router.post('/', tradeController.addTradeHandler);            
router.put('/:id', tradeController.updateTradeHandler);       
router.delete('/:id', tradeController.deleteTradeHandler);    

module.exports = router;
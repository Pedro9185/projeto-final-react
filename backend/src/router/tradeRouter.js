const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.get('/', tradeController.getAllTrades);         
router.get('/:id', tradeController.getTradeById);      
router.post('/', tradeController.addTrade);            
router.put('/:id', tradeController.updateTrade);       
router.delete('/:id', tradeController.deleteTrade);    

module.exports = router;

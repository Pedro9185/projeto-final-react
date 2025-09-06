const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeControllers');

router.get('/', tradeController.getAllTradesHandler);         
router.get('/:id', tradeController.getTradeByIdHandler);      
router.post('/', tradeController.addTradeHandler);            
router.put('/:id', tradeController.updateTradeHandler);       
router.delete('/:id', tradeController.deleteTradeHandler);    

module.exports = router;
// http://localhost:3000/trades/
// exemplo de post trade no json
// {
//     "productId": 1,
//     "userId": 1,
//     "tradedAt": "2023-10-10T10:00:00.000Z"
// }
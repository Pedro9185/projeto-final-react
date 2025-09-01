const tradeService = require('../services/tradeService');

const getAllTrades = async (req, res) => {
    try {
        const trades = await tradeService.getAllTrades();
        res.json(trades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTradeById = async (req, res) => {
    const { id } = req.params;
    try {
        const trade = await tradeService.getTradeById(Number(id));
        if (!trade) return res.status(404).json({ error: 'Trade não encontrada' });
        res.json(trade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addTrade = async (req, res) => {
    const { productId, userId, tradedAt } = req.body;
    try {
        const newTrade = await tradeService.addTrade(productId, userId, tradedAt);
        res.status(201).json(newTrade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTrade = async (req, res) => {
    const { id } = req.params;
    const { productId, userId, tradedAt } = req.body;
    try {
        const updatedTrade = await tradeService.updateTrade(Number(id), productId, userId, tradedAt);
        res.json(updatedTrade);
    } catch (error) {
        if (error.message === 'Trade não encontrada') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

const deleteTrade = async (req, res) => {
    const { id } = req.params;
    try {
        await tradeService.deleteTrade(Number(id));
        res.status(204).send();
    } catch (error) {
        if (error.message === 'Trade não encontrada') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTrades,
    getTradeById,
    addTrade,
    updateTrade,
    deleteTrade
};


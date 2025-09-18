const { getAllTrades, getTradeById, addTrade, updateTrade, deleteTrade } = require('../models/ModelTrade');

const getAllTradesHandler = async (req, res) => {
    try {
        const trades = await getAllTrades();
        res.json(trades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTradeByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const trade = await getTradeById(Number(id));
        if (!trade) return res.status(404).json({ error: 'Trade não encontrada' });
        res.json(trade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addTradeHandler = async (req, res) => {
    const { productId, userId, tradedAt } = req.body;
    try {
        const newTrade = await addTrade(productId, userId, tradedAt);
        res.status(201).json(newTrade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTradeHandler = async (req, res) => {
    const { id } = req.params;
    const { productId, userId, tradedAt } = req.body;
    try {
        const updatedTrade = await updateTrade(Number(id), productId, userId, tradedAt);
        res.json(updatedTrade);
    } catch (error) {
        if (error.message === 'Trade não encontrada') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

const deleteTradeHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteTrade(Number(id));
        res.status(204).send();
    } catch (error) {
        if (error.message === 'Trade não encontrada') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTradesHandler,
    getTradeByIdHandler,
    addTradeHandler,
    updateTradeHandler,
    deleteTradeHandler
};


const prisma = require('../prisma');

const getAllTrades = async () => {
    return prisma.trade.findMany({
        orderBy: {
            tradedAt: 'desc'
        },
        include: {
            product: true,
            user: true
        }
    });
}

const getTradeById = async (id) => {
    return prisma.trade.findUnique({
        where: { id },
        include: {
            product: true,
            user: true
        }
    });
}

const addTrade = async (productId, userId, tradedAt) => {
    return prisma.trade.create({
        data: {
            productId,
            userId,
            tradedAt
        }
    });
}

const updateTrade = async (id, productId, userId, tradedAt) => {
    const trade = await prisma.trade.findUnique({ where: { id } });

    if (!trade) throw new Error('Trade não encontrada');

    return prisma.trade.update({
        where: { id },
        data: { productId, userId, tradedAt }
    });
}

const deleteTrade = async (id) => {
    const trade = await prisma.trade.findUnique({ where: { id } });

    if (!trade) throw new Error('Trade não encontrada');

    return prisma.trade.delete({ where: { id } });
}

module.exports = {
    getAllTrades,
    getTradeById,
    addTrade,
    updateTrade,
    deleteTrade
};

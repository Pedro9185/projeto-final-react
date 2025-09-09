const prisma = require('../prisma'); 

const getAllUsers = async () => {
    return prisma.User.findMany({
        orderBy: {
            name: 'desc' 
        }
    });
};

const getUserById = async (id) => {
    return prisma.User.findUnique({
        where: { id }
    });
};

const createUser = async (name, email, password) => {
    return prisma.User.create({
        data: {
            name : name,
            email:email,
            password:password,
        }
    });
};

const updateUser = async (id, name, email, password) => {
    const user = await getUserById(id);

    if (!user) {
        throw new Error('Usuario não encontrado');
    }

    return prisma.User.update({
        where: { id },
        data: {
            name,
            email,
            password,
        }
    });
};

const deleteUser = async (id) => {
    const user = await getUserById(id);

    if (!user) {
        throw new Error('Usuario não encontrado');
    }

    return prisma.User.delete({
        where: { id }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

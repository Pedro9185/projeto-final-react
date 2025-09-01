console.log ("--------------------------------")
const prisma = require('../prisma'); // importa a instância correta do Prisma
console.log ("--------------------------------")

// Buscar todos os usuários
const getAllUsers = async () => {
    return prisma.User.findMany({
        orderBy: {
            name: 'desc' // ajustado para o campo name
        }
    });
};

// Buscar usuário por ID
const getUserById = async (id) => {
    return prisma.User.findUnique({
        where: { id }
    });
};

// Criar usuário
const createUser = async (name, email, password, phone, address, birthDate) => {
    return prisma.User.create({
        data: {
            name : name,
            email:email,
            password:password,
            phone:phone,
            address:address,
            birthDate: new Date (birthDate) 
        }
    });
};

// Atualizar usuário
const updateUser = async (id, name, email, password, phone, address, birthDate) => {
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
            phone,
            address,
            birthDate
        }
    });
};

// Deletar usuário
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

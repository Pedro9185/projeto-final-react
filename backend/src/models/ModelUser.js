const prisma = require('../prisma');

const getAllUsers = async() => {
    return prisma.aluno.findMany({
        orderBy: {
            nome: 'desc'
        }
});
}

const getUserById = async(id) => {
    return prisma.User.findUnique({
        where: {
            id : id
        }
    });
}

const addUser = async(name, email, password, phone, address,birthDate) =>{
    return prisma.aluno.create({
        data: {
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            birthDate: birthDate
        }
    });
}

const updateUser = async(id, name, email, password, phone, address,birthDate ) => {
    const User = await getUserById(id);

    if(!User) {
        throw new Error('Usuario não encontrado');
    }

    return prisma.User.update({
        where: {
            id: id
        },
        data: {
            id: id,
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            birthDate: birthDate
        }
    });
}


const deleteUser = async(id) => {
    const User = await getUserById(id);

    if(!User) {
        throw new Error('Usuario não encontrado');
    }

    return prisma.User.delete({
        where: {
            id: id
        }
    });
}

models.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};

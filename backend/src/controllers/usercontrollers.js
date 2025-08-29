const {getUser, createUser, updateUserHandler, deleteUserHandler} = require('../models/ModelUser');

const getAllUsersHandler = async (req, res) => {
    try {
    const users = await getUser();
    res.status(200).json(users);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erro ao buscar usuarios'});
    }
}

const getUserByIdHandler = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await getUserById (id);
        if(!user) {
            return res.status(404).json({message: 'Usuario não encontrado'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar usuario'});
}}

const addUserHandler = async (req, res) => {
    const {name, email, password, phone, address,birthDate} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'Email e senha são obrigatórios'});
    } 
    try {
        const newUser = await createUser(name, email, password, phone, address,birthDate);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({message: 'Erro ao criar usuario'});
    }
}


const updateUserHandler = async (req, res) => {
    const id = parseInt (req.params.id);
    const {name, email, password, phone, address,birthDate} = req.body;
    if (!email, !password) {
        return res.status(400).json({message: 'Email e senha são obrigatórios'});
    }
    try {
        const UserAtualizado = await updateUser(id, name, email, password, phone, address, birthDate);
        res.status(200).json(UserAtualizado);
    } catch (error) {
        if (error.message === 'Usuario não encontrado') {
            return res.status(404).json({message: 'Usuario não encontrado'});
        }
        res.status(500).json({message: 'Erro ao atualizar usuario'});
    }

}

const deleteUserHandler = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await deleteUser(id);
        res.status(204).json({message: 'Sucesso ao deletar usuario'});
    } catch (error) {
        if (error.message === 'Usuario não encontrado') {
            return res.status(404).json({message: 'Usuario não encontrado'});
        }
        res.status(500).json({message: 'Erro ao deletar usuario'});
    }
}

Module.exports = {
    getAllUsersHandler,
    getUserByIdHandler,
    addUserHandler,
    updateUserHandler, 
    deleteUserHandler
};
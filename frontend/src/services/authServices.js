import api from "./api";

const userRegister = async (payload) => {
  try {
    console.log("Cadastrando", payload);
    console.log("====================================")
    // Debug log removed
    const response = await api.post('/auth/register', payload);
    console.log("Cadastrado", response)
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};

const userLogin = async (payload) => {
  try {
    // Debug log removed
    const response = await api.post('/auth/login', payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário.", error);
    throw error;
  }
};

export default {
  userRegister,
  userLogin,
};
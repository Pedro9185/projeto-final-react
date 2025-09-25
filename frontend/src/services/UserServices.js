import api from "./api";

const buscarUser = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
    throw error;
  }
};

const buscarDadosUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
    throw error;
  }
};

const createnewUser = async (payload) => {
  try {
    console.log("Criando usuário:", payload);
    const response = await api.post("/users", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    throw error;
  }
};

const updateDadosUser = async (id, payload) => {
  try {
    const response = await api.put(`/users/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário", error);
    throw error;
  }
};

const deleteDadosUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.status === 204 ? true : response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
};

export default {
  buscarUser,
  buscarDadosUser,
  createnewUser,
  updateDadosUser,
  deleteDadosUser,
};

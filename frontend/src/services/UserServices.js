import api from "./api";

const buscarUser = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados", error);
    throw error;
  }
};

const buscarDadosUser = async (id, payload) => {
  try {
    const response = await api.get(`/users/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados", error);
    throw error;
  }
};

const createnewUser = async (payload) => {
  try {
    console.log("===========================================")
    console.log(payload)
    const response = await api.post("/users", payload);
    return response.data;
  } catch (error) {
    console.log("Erro ao criar Usuario", error);
    throw error;
  }
};

const updateDadosUser = async (id, payload) => {
  try {
    const response = await api.put(`/users/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar dados", error);
    throw error;
  }
};

const deleteDadosUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return res.status === 204 ? true : response.data;
  } catch (error) {
    console.error("Erro Deletar Usuario", error);
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

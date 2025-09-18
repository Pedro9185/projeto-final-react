import api from "./api";

const buscarTrade = async () => {
    try {
        const response = await api.get("/trades");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos", error);
    throw error;
  }
};
    
const buscarDadosTrade = async (id, payload) => {
    try {
        const response = await api.get(`/trades/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do produto", error);
    throw error;
  }
    };

const createNewTrade = async (payload) => {
    try {
        console.log(payload)
            const response = await api.post ("/trades", payload);
    return response.data;
  } catch (error) {
    console.log("Erro ao criar produto, tente novamente mais tarde", error);
    throw error;
  };
};
  
const updateDadosTrade = async (id, payload) =>  {
    try {
        const response = await api.put(`/trades/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar dados do produto", error);
    throw error;
  } 
};

const deleteTrade = async (id) => {
    try {
        const response = await api.delete(`/trades/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto, tente novamente mais", error);
    throw error;
  }
};
export default {
    buscarTrade,
    buscarDadosTrade,
    createNewTrade,
    updateDadosTrade,
    deleteTrade
};
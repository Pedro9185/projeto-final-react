import api from "./api";

const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produto", error);
    throw error;
  }
};

const createProduct = async (payload) => {
  try {
    const response = await api.post("/products", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto", error);
    throw error;
  }
};

const updateProduct = async (id, payload) => {
  try {
    const response = await api.put(`/products/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar produto", error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto", error);
    throw error;
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
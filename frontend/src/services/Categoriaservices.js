import api from "./api";

// Dados iniciais em memória (produtos no lugar de nome)
let categorias = [
  { id: 1, produto: "Produto 1" },
  { id: 2, produto: "Produto 2" },
  { id: 3, produto: "Produto 3" },
  { id: 4, produto: "Produto 4" }
];

// Criar novo produto/categoria
function createCategoria(dados) {
  const novaCategoria = { id: categorias.length + 1, ...dados };
  categorias.push(novaCategoria);
  return novaCategoria;
}

// Listar todos
function getCategorias() {
  return categorias;
}

// Buscar por ID
function getCategoriaById(id) {
  return categorias.find(cat => cat.id === id);
}

// Atualizar
function updateCategoria(id, dados) {
  const index = categorias.findIndex(cat => cat.id === id);
  if (index === -1) return null;
  categorias[index] = { ...categorias[index], ...dados };
  return categorias[index];
}

// Deletar
function deleteCategoria(id) {
  const index = categorias.findIndex(cat => cat.id === id);
  if (index === -1) return null;
  return categorias.splice(index, 1)[0];
}

module.exports = {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria
};



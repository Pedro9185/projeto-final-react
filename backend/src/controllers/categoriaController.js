const categoriaModel = require('../models/categoriaModel')

async function createCategoria(req, res) {
  const{name} = req.body;
  try {
    const categoria = await categoriaModel.create(name)
    res.status(201).json(categoria)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getCategorias(req, res) {
  try {
    const categorias = await categoriaModel.findAll()
    res.status(200).json(categorias)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getCategoriaById(req, res) {
  try {
    const categoria = await categoriaModel.findById(req.params.id)
    if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' })
    res.json(categoria)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function updateCategoria(req, res) {
  try {
    const categoria = await categoriaModel.update(req.params.id, req.body)
    res.json(categoria)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function deleteCategoria(req, res) {
  try {
    await categoriaModel.remove(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createCategoria, getCategorias, getCategoriaById, updateCategoria, deleteCategoria }

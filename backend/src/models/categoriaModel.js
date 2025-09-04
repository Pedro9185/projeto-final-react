
const prisma = require('../prisma')

async function create(name) {
  return await prisma.category.create({ data: {
            name: name
            
        } })
}


async function findAll() {
  return prisma.category.findMany()
}

async function findById(id) {
  return await prisma.category.findUnique({ where: { id: Number(id) } })
}

async function update(id, data) {
  return await prisma.category.update({ where: { id: Number(id) }, data })
}

async function remove(id) {
  return await prisma.category.delete({ where: { id: Number(id) } })
}

module.exports = { create, findAll, findById, update, remove }

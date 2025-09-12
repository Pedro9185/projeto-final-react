const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function create(data) {
  return await prisma.product.create({ data });
}

async function findAll() {
  return await prisma.product.findMany({
    include: {
      user: true,
      category: true,
    },
  });
}

async function findById(id) {
  return await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      user: true,
      category: true,
    },
  });
}

async function update(id, data) {
  return await prisma.product.update({
    where: { id: Number(id) },
    data,
  });
}

async function remove(id) {
  return await prisma.product.delete({
    where: { id: Number(id) },
  });
}

module.exports = { create, findAll, findById, update, remove };
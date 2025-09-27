const prisma = require("../prisma");

const getAllUsers = async () => {
  return prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  });
};

const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

const getUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const createUser = async (name, email, password) => {
  return prisma.user.create({
    data: {
      name: name,
      email:email,
      password_hash: password
    },
  });
};

const updateUser = async (id, name, email, password) => {
  const user = await getUserById(id);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      password,
    },
  });
};

const deleteUser = async (id) => {
  const user = await getUserById(id);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return prisma.user.delete({
    where: { id },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};

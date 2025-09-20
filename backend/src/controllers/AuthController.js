const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { getUserById, createUser } = require("../models/ModelUser");

function signToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_SECRET_IN || "1h" }
  );
}

  async function Register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Campos estão faltando." });
    }

    const exists = await getUserById(email);
    if (exists) {
      return res.status(409).json({ error: "Emaill já cadastrado" });
    }

    const newUser = await createUser({
      nome,
      data_nascimento, // DATE puro (YYYY-MM-DD) aceito pelo Prisma por causa do @db.Date
      email,
      password_hash,
    });

    const password_hash = await bcrypt.hash(password, 10);

    return res.status(201).json({
        user: {
            id: exists.id,
            email: exists.email,
            name: exists.name,
            role: exists.role,
        },  
    })
  }

    async function Login(req, res) {
      const { email, password } = req.body;

      if (!email || !password)
        return res.status(400).json({ error: "Campos estão faltando." });

      const user = await getUserById(email);

      const exists = await getUserById(email);
      if (exists) {
        return res.status(409).json({ error: "Emaill já cadastrado" });
      }

      if (!user || !user.password_hash) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const ok = await bcrypt.compare(password, user.password_hash);
      if (!ok) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const token = signToken(user);

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      });
    }
  
  module.exports = { Register, Login };
  
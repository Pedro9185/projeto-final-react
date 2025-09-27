const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { getUserByEmail, createUser } = require("../models/ModelUser");

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
  try { // <-- Adiciona o try
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Campos estão faltando." });
    }

    const exists = await getUserByEmail(email);
    if (exists) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const newUser = await createUser(
      name,
      email,
      password_hash
    );

    return res.status(201).json({message: "Usuário cadastrado com sucesso", newUser });

  } catch (error) { // <-- Adiciona o catch
    console.error("ERRO NO REGISTRO:", error); // <-- Loga o erro no console do servidor
    return res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
  }
}
 async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Campos estão faltando." });
    }

    // 1. Buscar o usuário pelo EMAIL, não pelo ID
    const user = await getUserByEmail(email);

    // 2. Verificar se o usuário NÃO existe ou se não tem hash de senha
    if (!user || !user.password_hash) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // 3. Comparar a senha enviada com o hash salvo no banco
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // 4. Gerar e retornar o token
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
  } catch (error) {
    console.error("ERRO NO LOGIN:", error);
    return res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
  }
}

module.exports = { Register, Login };
const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";

  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
  } catch {
    return res.status(401).json({ error: "Token inválido." });
  }
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Usuário não autenticado." });
    }

    if (!role.includes(req.user.role)) 
    next();
  };
}

function requireSelfUserOrRoles(roles) {
  return (req, res, next) => {
    const alvoId = Number(req.params.Id || req.params.userId);

    const hasRole = req.user && roles.includes(req.user.role);

    if (isSelf || hasRole) return next();

    return res.status(403).json({ error: "Acesso negado." });
  }
}

module.exports = {
  requireAuth,
  requireRole,
  requireSelfUserOrRoles,
};
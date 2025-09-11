import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from "../../services/UserServices";
import "./login.css";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


function Login() {
  const [users, setUsers] = useState<User[]>([]); // array de usuários
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Carrega usuários da API
  async function load() {
    try {
      setLoading(true);
      const data = await UserServices.buscarUser();
      console.log("Usuários retornados da API:", data);
      //setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    } 
      finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Busca usuário com email e senha corretos
    const existe = users.find(
      (user) => user.email === email && user.password === senha
    );

    if (!existe) {
      alert("Email ou senha inválidos");
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(existe));
    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="shadow p-4 rounded-4"
        style={{ width: "100%", maxWidth: "420px", backgroundColor: "white" }}
      >
        {/* Ícone central */}
        <div className="text-center mb-3">
          <div
            className="mx-auto d-flex justify-content-center align-items-center rounded-circle"
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(to right, #22c55e, #3b82f6)",
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/leaf.png"
              alt="leaf"
            />
          </div>
        </div>

        <h4 className="text-center fw-bold">Entrar no Ecotroca</h4>
        <p className="text-center text-muted small">
          Faça login para começar a trocar e ajudar o meio ambiente
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </svg>
              </span>
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="Password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <div className="text-end mb-3">
            <Link to="#" className="text-success small">
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-semibold"
            style={{
              background: "linear-gradient(to right, #22c55e, #3b82f6)",
            }}
          >
            Entrar
          </button>
        </form>

        <p className="text-center mt-3 small">
          Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        {/* Mensagens de loading e erro */}
        {loading && <p>Carregando...</p>}
        {error && (
          <p className="alert alert-danger">Ocorreu um Erro: {error}</p>
        )}

      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/authServices"; // Importe o serviço de autenticação
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Renomeei para 'setPassword' por convenção
  const [error, setError] = useState<string | null>(null); // Para guardar mensagens de erro
  const [loading, setLoading] = useState(false); // Para feedback visual no botão

  const navigate = useNavigate();

  // Função que lida com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Previne o recarregamento da página
    setError(null); // Limpa erros anteriores

    if (!email || !password) {
      setError("Por favor, preencha o email e a senha.");
      return;
    }

    setLoading(true); // Inicia o loading

    try {
      console.log("Tentando logar com:", { email, password });
      const response = await authServices.userLogin({ email, password });

      // Sucesso! Salve os dados e navegue para a página principal
      console.log("Login bem-sucedido:", response);
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("usuarioLogado", JSON.stringify(response.user));
      
      navigate("/#"); // Redireciona para a home

    } catch (err) {
      // Falha no login
      console.error("Erro no login:", err);
      setError("Email ou senha inválidos. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="shadow p-4 rounded-4"
        style={{ width: "100%", maxWidth: "420px", backgroundColor: "white" }}
      >
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
            <label htmlFor="email" className="form-label">E-mail</label>
            <div className="input-group">
              {/* SVG do email aqui */}
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="seu@email.com"
                value={email} // Controla o valor do input
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="senha" className="form-label">Senha</label>
            <div className="input-group">
              {/* SVG da senha aqui */}
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="Sua senha"
                value={password} // Controla o valor do input
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          {/* Mensagem de erro */}
          {error && <p className="alert alert-danger mt-3">{error}</p>}

          <div className="text-end mb-3">
            <Link to="#" className="text-success small">Esqueceu a senha?</Link>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-semibold"
            style={{ background: "linear-gradient(to right, #22c55e, #3b82f6)" }}
            disabled={loading} // Desabilita o botão durante o loading
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-center mt-3 small">
          Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
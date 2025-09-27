import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/authServices";
import "./cadastro.css";

function Cadastro() {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

    async function load() {
      try {
        setLoading(true);
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      setError("Erro ao cadastrar usuário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  
    useEffect(() => {
      load();
    }, []);

    const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!name || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (password.length < 5) {
      setError("A senha deve ter pelo menos 5 caracteres.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Por favor, insira um email válido.");
      return;
    }
        const data = {
          name: name,
          email: email,
          password: password,
        };
        console.log("Usuários retornados da API:", data);
        const newUser = await authServices.userRegister(data);

        localStorage.setItem("UsuarioCadastrado", JSON.stringify(newUser));
        console.log("Usuário cadastrado com sucesso:", newUser);
        navigate("/#");
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '420px', backgroundColor: 'white' }}>
     
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

        <h4 className="text-center fw-bold">Cadastrar no Ecotroca</h4>
        <p className="text-center text-muted small">
          Faça o Cadastro para começar a trocar e ajudar o meio ambiente
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nome Completo"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
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
            <label htmlFor="password" className="form-label">Senha</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                </svg>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-semibold"
            style={{
              background: "linear-gradient(to right, #22c55e, #3b82f6)",
              marginTop: "20px",
            }}
          >
            Cadastrar
          </button> 
        </form>

         <p className="text-center mt-3 small">
          Já tem uma conta? <Link to="/">Entrar</Link>
           </p>
      </div>
   </div>
  );
}

export default Cadastro;

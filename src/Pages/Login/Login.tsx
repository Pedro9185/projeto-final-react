import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../../dados/usuarios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const existe = usuarios.find(
      (user) => user.email === email && user.senha === senha
    );

    if (!existe) {
      alert("Email ou senha invalidos");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <div className="login-ctn">
        <p>Entre no Sistema</p>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login;

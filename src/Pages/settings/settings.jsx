import { useState } from "react";
import "./settings.css";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados salvos com sucesso!");
  };
  return (
    <div className="settings-page">
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Cidade:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Avatar (URL):</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="URL da imagem"
          />
        </div>

        <button type="submit">Salvar Alterações</button>
      </form>
        </div> 
 );
}
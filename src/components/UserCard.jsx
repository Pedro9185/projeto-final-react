import { useNavigate } from "react-router-dom";
import './UserCard.css';
import { usuarios } from "../dados/usuarios";

export default function UserCard () {
    const navigate = useNavigate();
    const user = usuarios[2]
    return (
        <div className="user-card">
        <img src={user.avatar} alt="Avatar" />
        <div>
            <h2>{user.name}</h2>
            <p>"Membro desde {user.member}"</p>
            <p>{user.trades}</p>
            <p>{user.city}</p>
            </div>
            <div className="buttons">
                <button onClick={() => navigate('/settings')}>
                    Configurações
                </button>
                <button onClick={() => alert('Abrindo cadastro de novo item')}> 
                    Novo Item
                </button>
            </div>
            </div>
        );
}
import { useNavigate } from "react-router-dom";
import './UserCard.css';
import { usuarios } from "../dados/usuarios";

export default function UserCard () {
    const navigate = useNavigate();
    const user = usuarios[2]
    return (
        <div className="user-card">
        <img src={user.avatar} alt="Avatar" className="imagem" />
        <div className="ctn-info">
            <div> <h2>{user.name}</h2></div>
           <div> <p>"Membro desde {user.member}"</p></div>
           <div> <p>{user.trades}</p></div>
           <div> <p>{user.city}</p></div>
            </div>
            <div className="buttons">
                <button onClick={() => navigate('/settings')}>
                    Configurações
                </button>
            </div>
            </div>
        );
}
import { useNavigate } from "react-router-dom";
import './UserCard.css';
import { useState } from "react";
import NavBar from "./NavBar";

export default function UserCard () {
    const navigate = useNavigate();
    const user = usuarios[2];
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedAvatar, setEditedAvatar] = useState(user.avatar);
    const [editedCity, setEditedCity] = useState(user.city);

    function handleSave() {
        user.name = editedName;
        user.avatar = editedAvatar;
        user.city = editedCity;
        setIsEditing(false);
    }
    return (
       <>
       <NavBar/>
        <div className="user-card">
        <img src= {setIsEditing ? editedAvatar : user.avatar} alt="Avatar" className="imagem" 
        />
        <div className="ctn-info">
            {isEditing ? (
                <>
                <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                <input type="text" value={editedAvatar} onChange={(e) => setEditedAvatar(e.target.value)} />
                <input type="text" value={editedCity} onChange={(e) => setEditedCity(e.target.value)} placeholder="URL do avatar"/>
                </>
            ) : (
                <>
            <div> <h2>{user.name}</h2></div>
           <div> <p>Membro desde {user.member}</p></div>
           <div> <p>{user.city}</p></div>
           </>
            )}
            </div>
            <div className="buttons">
                {isEditing ? (
                    <button onClick={handleSave}>Salvar</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                )}
            </div>
            </div>
       </>
        );
}
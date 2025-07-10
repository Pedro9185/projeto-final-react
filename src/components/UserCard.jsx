import './UserCard.css';
export default function UserCard () {
    return (
        <div className="user-card">
        <img src="" alt="Avatar" />
        <div>
            <h2>User</h2>
            <p>Membro desde </p>
            <p>avaliações</p>
            <p>trocas realizadas</p>
            <p>Cidade</p>
            </div>
            <div className="buttons">
                <button onClick={() => alert('Entrando nas configurações')}> 
                    Configurações
                </button>
                <button onClick={() => alert('Abrindo cadastro de novo item')}> 
                    Novo Item
                </button>
            </div>
            </div>
        );
}
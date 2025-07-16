import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {

    const [logado, setLogado] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("usuarioLogado");
        setLogado(!!user); // true se existir
    }, []);

    const sair = () =>{
        localStorage.removeItem("usuarioLogado")
        navigate("/")
    } 

    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
            <div className="container-fluid">

                <Link to={"/home"} className="navbar-brand d-flex align-items-center" >
                    <img
                        src="https://img.icons8.com/ios-filled/30/4caf50/leaf.png"
                        alt="Logo"
                        className="me-2"
                    />
                    <span style={{ color: '#198754' }}>Eco</span><span style={{ color: '#0d6efd' }}>troca</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item ms-3">
                            <Link to={'/explorar'} className="nav-link text-secondary" >Explorar</Link>
                        </li>


                        <li className="nav-item ms-3">
                            <Link to={'/cadastrarItem'} className="nav-link text-secondary" >Novo Item</Link>
                        </li>
                         <li className="nav-item ms-3">
                            <Link to={'/userCard'} className="nav-link text-secondary" >Usuário</Link>
                        </li>
                    </ul>


                    <div className="d-flex align-items-center ms-auto">
                        {!logado && (
                            <Link to="/login" className="btn btn-outline-secondary me-2">
                                Entrar
                            </Link>
                        )}
                        <Link to="/tabs" className="btn btn-success text-white">
                            <i className="bi bi-person-fill me-1"></i> Meu Perfil
                        </Link>
                        <button className="btn btn-success m-3 text-white" onClick={() => sair()}>
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

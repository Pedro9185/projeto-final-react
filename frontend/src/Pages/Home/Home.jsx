import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Home.css";



function Home() {
  return (
    <>
      <NavBar />

      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #2E7D32, #AED581, #FFF176)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">
            Troque, <span className="text-white">Reutilize</span>,{" "}
            <span style={{ color: "#FF8F00" }}>Sustente</span>
          </h1>
          <p className="lead mt-3">
            A plataforma que conecta pessoas para trocas sustentáveis na sua região
          </p>

          <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
            <Link
              to="/cadastrarItem"
              className="btn btn-light text-success fw-semibold d-flex align-items-center px-4"
            >
              Cadastrar Item <i className="bi bi-arrow-right ms-2"></i>
            </Link>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar item..."
              style={{ maxWidth: "240px", borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>

      <section className="py-5 bg-white text-center">
        <div className="container d-flex flex-column flex-md-row justify-content-around gap-4">
          
          <div>
            <div className="mb-2">
              <i className="bi bi-recycle" style={{ fontSize: "2rem", color: "#4ade80" }}></i>
            </div>
            <h4 className="fw-bold">1,200+</h4>
            <p className="text-muted">Itens trocados</p>
          </div>

          <div>
            <div className="mb-2">
              <i className="bi bi-people" style={{ fontSize: "2rem", color: "#60a5fa" }}></i>
            </div>
            <h4 className="fw-bold">700+</h4>
            <p className="text-muted">Usuários ativos</p>
          </div>

          <div>
            <div className="mb-2">
              <i className="bi bi-heart-fill" style={{ fontSize: "2rem", color: "#facc15" }}></i>
            </div>
            <h4 className="fw-bold">98%</h4>
            <p className="text-muted">Satisfação</p>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-5 bg-light text-center ">
        <div className="container" >
          <h2 className="fw-bold mb-4">Sobre</h2>
          <p>
            Somos uma plataforma dedicada a conectar pessoas que desejam trocar produtos de maneira prática, consciente e sustentável. Acreditamos que cada item que passa por nossas mãos pode ter uma nova história, e que o simples ato de trocar objetos é uma poderosa ferramenta para reduzir o desperdício, promover o consumo consciente e fortalecer a economia colaborativa.
          </p>
          <p>
           Nosso propósito vai além de facilitar trocas: queremos criar uma comunidade ativa e engajada, aproximando pessoas da mesma região e incentivando relações de confiança e cooperação. Cada troca realizada é uma oportunidade de reaproveitar recursos, diminuir o impacto ambiental e valorizar o ciclo de vida dos produtos que, de outra forma, poderiam ser descartados sem utilidade.
          </p>
        </div>
      </section>
      
      <section>
        <div container class="my-5">
          <h1 class="text-center">Troque, Reutilize, Sustente</h1>
          <p class="text-center">Junte-se a nós nessa jornada de transformação e faça parte de uma comunidade que valoriza o que realmente importa: o planeta e as pessoas.</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
        <Link
              to="/Login"
              className="btn btn-success text-white px-4 py-2"
            >
              Juntar-se <i class="bi bi-door-open"></i>
            </Link>
        </div>
      </section>

      <section className="mt-5">
        <footer class="footer">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-white">Redes Sociais</h5>
            <a href="#" ><i class="bi bi-linkedin text-white me-3"></i></a>
            <a href="#" ><i class="bi bi-twitter-x text-white me-3"></i></a>
            <a href="#" ><i class="bi bi-instagram text-white me-3"/></a>
            <a href="#" ><i class="bi bi-whatsapp text-white me-3"/></a>
          </div>
             <div className="col-md-4 mb-3">
            <h5 className="fw-bold" class="text-white">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Buscar Itens</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sobre</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contato</a></li>
            </ul>
          </div>
         
          <p class="text-center text-white">© 2025 EcoTroca. Todos os direitos reservados.</p>
        </footer>
      </section>
    </>
  );
}

export default Home;

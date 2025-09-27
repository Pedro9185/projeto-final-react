import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
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
            A plataforma que conecta pessoas para trocas sustentáveis na sua
            região
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
              <i
                className="bi bi-recycle"
                style={{ fontSize: "2rem", color: "#4ade80" }}
              ></i>
            </div>
            <h4 className="fw-bold">1,200+</h4>
            <p className="text-muted">Itens trocados</p>
          </div>

          <div>
            <div className="mb-2">
              <i
                className="bi bi-people"
                style={{ fontSize: "2rem", color: "#60a5fa" }}
              ></i>
            </div>
            <h4 className="fw-bold">700+</h4>
            <p className="text-muted">Usuários ativos</p>
          </div>

          <div>
            <div className="mb-2">
              <i
                className="bi bi-heart-fill"
                style={{ fontSize: "2rem", color: "#facc15" }}
              ></i>
            </div>
            <h4 className="fw-bold">98%</h4>
            <p className="text-muted">Satisfação</p>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-5 bg-light text-center ">
        <div className="container">
          <h2 className="fw-bold mb-4">Sobre</h2>
          <p>
            Somos uma plataforma dedicada a conectar pessoas que desejam trocar
            produtos de maneira prática, consciente e sustentável. Acreditamos
            que cada item que passa por nossas mãos pode ter uma nova história,
            e que o simples ato de trocar objetos é uma poderosa ferramenta para
            reduzir o desperdício, promover o consumo consciente e fortalecer a
            economia colaborativa.
          </p>
          <p>
            Nosso propósito vai além de facilitar trocas: queremos criar uma
            comunidade ativa e engajada, aproximando pessoas da mesma região e
            incentivando relações de confiança e cooperação. Cada troca
            realizada é uma oportunidade de reaproveitar recursos, diminuir o
            impacto ambiental e valorizar o ciclo de vida dos produtos que, de
            outra forma, poderiam ser descartados sem utilidade.
          </p>
        </div>
      </section>

      <section>
        <div className="text-center ">
          <h1 className="text-center mb-4 mt-4 fw-bold">
            Troque, Reutilize, Sustente
          </h1>
          <p className="text-center mb-4">
            Junte-se a nós nessa jornada de transformação e faça parte de uma
            comunidade que valoriza o que realmente importa: o planeta e as
            pessoas.
          </p>
          <Link
            to="/Login"
            className="btn btn-primary rounded-pill px-3 juninho" type="button"
          >
            Juntar-se <i className="bi bi-door-open"></i>
          </Link>
        </div>
      </section>


     <div class="b-example-divider"></div>
    <div class="container cleitinho">
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top "
      >
        <div class="col mb-3">
         <Link to={"/home"} className="navbar-brand d-flex align-items-center" >
                    <img
                        src="https://img.icons8.com/ios-filled/30/4caf50/leaf.png"
                        alt="Logo"
                        className="me-2"
                    />
                    <span className="eco-gradient">EcoTroca</span>
                </Link>
          <p class="text-white">&copy; 2025</p>
        </div>
        <div class="col mb-3"></div>
        <div class="col mb-3">
          <h5 class="text-white cleitinho">Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="/Login" class="nav-link p-0 text-white">Login</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">FAQs</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">About</a>
            </li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5 class="text-white">Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Features</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">FAQs</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">About</a>
            </li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5 class="text-white">Social Media</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="https://www.instagram.com/joelzzrl/" class="nav-link p-0 text-white ms-5"><i class="bi bi-linkedin"></i></a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white ms-5"><i class="bi bi-instagram"></i></a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white ms-5"><i class="bi bi-twitter-x"></i></a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white ms-5"><i class="bi bi-whatsapp"></i></a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white ms-5"><i class="bi bi-tiktok"></i></a>
            </li>
          </ul>
        </div>
      </footer >
    </div>
    </>
  );
}

export default Home;

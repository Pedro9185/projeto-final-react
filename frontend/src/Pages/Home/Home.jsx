import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
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
              Cadastrar Item
              <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </Link>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-inline-block"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Buscar item..."
                aria-label="Buscar item"
                style={{
                  maxWidth: "240px",
                  borderRadius: "10px",
                }}
              />
            </form>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-white text-center">
        <div className="container d-flex flex-column flex-md-row justify-content-around gap-4">
          <div>
            <div className="mb-2">
              <i
                className="bi bi-recycle"
                style={{ fontSize: "2rem", color: "#4ade80" }}
                aria-hidden="true"
              ></i>
            </div>
            <h3 className="fw-bold">1,200+</h3>
            <p className="text-muted mb-0">Itens trocados</p>
          </div>

          <div>
            <div className="mb-2">
              <i
                className="bi bi-people"
                style={{ fontSize: "2rem", color: "#60a5fa" }}
                aria-hidden="true"
              ></i>
            </div>
            <h3 className="fw-bold">700+</h3>
            <p className="text-muted mb-0">Usuários ativos</p>
          </div>

          <div>
            <div className="mb-2">
              <i
                className="bi bi-heart-fill"
                style={{ fontSize: "2rem", color: "#facc15" }}
                aria-hidden="true"
              ></i>
            </div>
            <h3 className="fw-bold">98%</h3>
            <p className="text-muted mb-0">Satisfação</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Sobre</h2>

          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Somos uma plataforma dedicada a conectar pessoas que desejam trocar
            produtos de maneira prática, consciente e sustentável. Acreditamos
            que cada item que passa por nossas mãos pode ter uma nova história,
            e que o simples ato de trocar objetos é uma poderosa ferramenta para
            reduzir o desperdício, promover o consumo consciente e fortalecer a
            economia colaborativa.
          </p>

          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Nosso propósito vai além de facilitar trocas: queremos criar uma
            comunidade ativa e engajada, aproximando pessoas da mesma região e
            incentivando relações de confiança e cooperação. Cada troca
            realizada é uma oportunidade de reaproveitar recursos, diminuir o
            impacto ambiental e valorizar o ciclo de vida dos produtos que, de
            outra forma, poderiam ser descartados sem utilidade.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">
            Troque, Reutilize, Sustente
          </h2>

          <p className="mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Junte-se a nós nessa jornada de transformação e faça parte de uma
            comunidade que valoriza o que realmente importa: o planeta e as
            pessoas.
          </p>

          <Link
            to="/Login"
            className="btn btn-primary rounded-pill px-4 py-2"
          >
            Juntar-se <i className="bi bi-door-open ms-1" aria-hidden="true"></i>
          </Link>
        </div>
      </section>

      <div className="b-example-divider"></div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 border-top">
            <div className="col mb-3">
              <Link
                to="/home"
                className="navbar-brand d-flex align-items-center mb-2"
              >
                <img
                  src="https://img.icons8.com/ios-filled/30/4caf50/leaf.png"
                  alt="Logo EcoTroca"
                  className="me-2"
                />
                <span className="eco-gradient fw-bold">EcoTroca</span>
              </Link>
              <p className="text-muted small">&copy; 2025 EcoTroca</p>
            </div>

            <div className="col mb-3"></div>

            <div className="col mb-3">
              <h5 className="text-white mb-3">Navegação</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/home" className="nav-link p-0 text-white-50">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/Login" className="nav-link p-0 text-white-50">
                    Login
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/cadastro" className="nav-link p-0 text-white-50">
                    Cadastro
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/faq" className="nav-link p-0 text-white-50">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/sobre" className="nav-link p-0 text-white-50">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className="text-white mb-3">EcoTroca</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/home" className="nav-link p-0 text-white-50">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/como-funciona" className="nav-link p-0 text-white-50">
                    Como funciona
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/pontos" className="nav-link p-0 text-white-50">
                    Pontos de coleta
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/faq" className="nav-link p-0 text-white-50">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/sobre" className="nav-link p-0 text-white-50">
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className="text-white mb-3">Redes Sociais</h5>
              <ul className="nav flex-column gap-2">
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link p-0 text-white-50 d-flex align-items-center gap-2"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/joelzzrl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link p-0 text-white-50 d-flex align-items-center gap-2"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link p-0 text-white-50 d-flex align-items-center gap-2"
                    aria-label="Twitter X"
                  >
                    <i className="bi bi-twitter-x"></i> X (Twitter)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link p-0 text-white-50 d-flex align-items-center gap-2"
                    aria-label="WhatsApp"
                  >
                    <i className="bi bi-whatsapp"></i> WhatsApp
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link p-0 text-white-50 d-flex align-items-center gap-2"
                    aria-label="TikTok"
                  >
                    <i className="bi bi-tiktok"></i> TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
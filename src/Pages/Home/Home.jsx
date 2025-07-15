import NavBar from "../../components/NavBar"

function Home() {


    return(
        
        <>
        <NavBar/>
         <div>
      
      <section
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(to right, #22c55e, #3b82f6)',
          color: 'white',
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">
            Troque, <span className="text-white">Reutilize</span>, <span style={{ color: '#fde047' }}>Sustente</span>
          </h1>
          <p className="lead mt-3">
            A plataforma que conecta pessoas para trocas sustentáveis na sua região
          </p>

          <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
            <button className="btn btn-light text-success fw-semibold d-flex align-items-center px-4">
              Cadastrar Item <i className="bi bi-arrow-right ms-2"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar item..."
              style={{ maxWidth: '240px', borderRadius: '10px' }}
            />
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-white text-center">
        <div className="container d-flex flex-column flex-md-row justify-content-around gap-4">
          
          <div>
            <div className="mb-2">
              <i className="bi bi-recycle" style={{ fontSize: '2rem', color: '#4ade80' }}></i>
            </div>
            <h4 className="fw-bold">1,200+</h4>
            <p className="text-muted">Itens trocados</p>
          </div>

          
          <div>
            <div className="mb-2">
              <i className="bi bi-people" style={{ fontSize: '2rem', color: '#60a5fa' }}></i>
            </div>
            <h4 className="fw-bold">500+</h4>
            <p className="text-muted">Usuários ativos</p>
          </div>

          
          <div>
            <div className="mb-2">
              <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: '#facc15' }}></i>
            </div>
            <h4 className="fw-bold">98%</h4>
            <p className="text-muted">Satisfação</p>
          </div>
        </div>
      </section>
    </div>
        </>
    )

}

export default Home
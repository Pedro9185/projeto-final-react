import { Link } from "react-router-dom";

import itens from "../../dados/itens";


let itensMock = itens

function Explorar() {
  return (
    <div className="container py-4">
     
      <div className="d-flex flex-column flex-md-row gap-2 mb-4 align-items-center">
        <div className="flex-grow-1 position-relative">
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Buscar itens para trocar..."
          />
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
        </div>
        <select className="form-select w-auto">
          <option>Categoria</option>
        </select>
        <select className="form-select w-auto">
          <option>Localização</option>
        </select>
        <Link to={'/home'} className="btn btn-outline-success">
          <i className="bi bi-funnel-fill">Voltar</i>
        </Link>
      </div>


      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">Itens Disponíveis para Troca</h4>
        <span className="text-muted small">{itensMock.length} itens encontrados</span>
      </div>

   
      <div className="row g-4">
        {itensMock.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.imagem}
                className="card-img-top"
                alt={item.nome}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <span className={`badge bg-${item.badgeColor} mb-2`}>
                  {item.categoria}
                </span>
                <h6 className="card-title">{item.nome}</h6>
                <p className="text-muted small mb-0">
                  <i className="bi bi-clock me-1"></i> {item.tempo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorar;

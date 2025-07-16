import itens from "../dados/itens";

export default function Items() {
const Ids = [1,4];
const ItensFiltrados = itens.filter(item => Ids.includes(item.id));

    return (
    <div className ="row g-4">
        {ItensFiltrados.map((item) => (
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
                <h5 className="card-title">{item.nome}</h5>
                <h6 className="card-title">Descrição:</h6>
                   <p className="text-muted small mb-0">
                  <i className="bi bi-clock me-1"></i> {item.descricao}
                </p>
                <p className="text-muted small mb-0">
                  <i className="bi bi-clock me-1"></i> {item.tempo}
                </p>
                 <p className="text-muted small mb-0">
                  <i className="bi bi-clock me-1"></i> {item.regiao}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
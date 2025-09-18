import { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import "./produtos.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setLoading(true);
        const data = await ProductServices.getProducts();
        setProdutos(data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }
    carregarProdutos();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Carregando produtos...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-4">{error}</p>;
  }

  return (
    <div className="produtos-container">
      <h2 className="titulo">Produtos disponíveis</h2>
      <div className="produtos-grid">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <div className="produto-card" key={produto.id}>
              <h4>{produto.name}</h4>
              <p>{produto.description || "Sem descrição"}</p>
              <span
                className={`status ${
                  produto.status === "disponível"
                    ? "disponivel"
                    : "trocado"
                }`}
              >
                {produto.status || "Sem status"}
              </span>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Produtos;
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

const CadastroItem = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [regiao, setRegiao] = useState('');
  const [bairro, setBairro] = useState('');
  const [foto, setFoto] = useState(null);
  const [itens, setItens] = useState([]);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !descricao || !categoria || !regiao || !bairro || !foto) {
      setMensagem({ tipo: 'danger', texto: 'Preencha todos os campos.' });
      return;
    }

    try {
      const fotoUrl = URL.createObjectURL(foto);

      const novoItem = {
        id: Date.now(),
        nome,
        descricao,
        categoria,
        regiao,
        bairro,
        fotoUrl,
      };

      setItens((prevItens) => [...prevItens, novoItem]);
      setMensagem({ tipo: 'success', texto: 'Item cadastrado com sucesso!' });

      // Limpa os campos
      setNome('');
      setDescricao('');
      setCategoria('');
      setRegiao('');
      setBairro('');
      setFoto(null);

      const fotoInput = document.getElementById('fotoInput');
      if (fotoInput) fotoInput.value = '';
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
      setMensagem({ tipo: 'danger', texto: 'Erro ao cadastrar item.' });
    }
  };

  return (
    <>
      <NavBar />

      <div className="container py-4">
        <div className="card shadow-lg rounded-5 p-4 mx-auto my-4" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h3 className="card-title text-center text-primary fw-bold mb-4">
              Cadastro de um novo Item
            </h3>

            {mensagem.texto && (
              <div className={`alert alert-${mensagem.tipo} text-center`} role="alert">
                {mensagem.texto}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  value={nome}
                  placeholder="Nome do Produto"
                  onChange={(e) => setNome(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={descricao}
                  placeholder="Descrição do Produto"
                  onChange={(e) => setDescricao(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="" disabled>
                    Selecione a Categoria...
                  </option>
                  <option value="Roupas e Acessórios">Roupas e Acessórios</option>
                  <option value="Eletrônicos">Eletrônicos</option>
                  <option value="Móveis e Decoração">Móveis e Decoração</option>
                  <option value="Livros e Revistas">Livros e Revistas</option>
                  <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
                  <option value="Brinquedos e Jogos">Animais</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={regiao}
                  placeholder="Região"
                  onChange={(e) => setRegiao(e.target.value)}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Bairro"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="fotoInput" className="form-label text-start d-block">
                  Foto do produto:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="fotoInput"
                  onChange={(e) => setFoto(e.target.files[0])}
                  className="form-control"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2"
                  style={{
                    background: 'linear-gradient(45deg, #28a745, #007bff)',
                    border: 'none',
                  }}
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Seção de Itens Cadastrados */}
        {itens.length > 0 && (
          <div className="mt-5">
            <h3 className="fw-bold text-dark mb-4 text-center">Itens Cadastrados</h3>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {itens.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    {item.fotoUrl && (
                      <img
                        src={item.fotoUrl}
                        alt={item.nome}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    )}
                    <div className="card-body">
                      <span className="badge bg-secondary mb-2">{item.categoria}</span>
                      <h5 className="card-title fw-bold text-primary">{item.nome}</h5>
                      <p className="card-text">{item.descricao}</p>
                    </div>
                    <div className="card-footer bg-transparent text-muted small">
                       {item.regiao} - {item.bairro}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CadastroItem;
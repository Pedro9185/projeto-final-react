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
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !descricao || !categoria || !regiao || !bairro || !foto) {
      setMensagem('Preencha todos os campos.');
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

      setMensagem('Item cadastrado com sucesso!');

      setNome('');
      setDescricao('');
      setCategoria('');
      setRegiao('');
      setBairro('');
      setFoto(null);

      document.getElementById('fotoInput').value = '';
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
      setMensagem('Erro ao cadastrar item.');
    }
  };

  return (
   <>
    <NavBar/>
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', color: '#007bff' }}>
        Cadastro de um novo Item
      </h3>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            placeholder='Nome do Produto'
            onChange={(e) => setNome(e.target.value)}
            style={{ width: '100%', paddingLeft: "5px", height: "40px", border: "1px solid #d3d3d3", borderRadius: "5px" }}
            required
           
            />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Descrição:</label>
          <input
            type="text"
            value={descricao}
            placeholder='Descrição do Produto'
            onChange={(e) => setDescricao(e.target.value)}
            style={{ width: '100%' , paddingLeft: "5px", height: "40px", border: "1px solid #d3d3d3", borderRadius: "5px"  }}
            required
            />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Categoria:</label>
          <input
            type="text"
            value={categoria}
            placeholder='Categoria do Produto'
            onChange={(e) => setCategoria(e.target.value)}
            style={{ width: '100%', paddingLeft: "5px", height: "40px", border: "1px solid #d3d3d3", borderRadius: "5px"  }}
            required
            />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Região:</label>
          <input
            type="text"
            value={regiao}
            placeholder='Região'
            onChange={(e) => setRegiao(e.target.value)}
            style={{ width: '100%', paddingLeft: "5px", height: "40px", border: "1px solid #d3d3d3", borderRadius: "5px"  }}
            required
            />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder='Bairro'
            style={{ width: '100%', paddingLeft: "5px", height: "40px", border: "1px solid #d3d3d3", borderRadius: "5px"  }}
            required
            />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label>Foto do produto:</label>
          <input
            type="file"
            accept="image/*"
            id="fotoInput"
            onChange={(e) => setFoto(e.target.files[0])}
            style={{ width: '100%', paddingLeft: "5px"  }}
            required
            />
        </div>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(45deg, #28a745, #007bff)',
            color: '#fff',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            display: 'inline-block',
            marginTop: '10px',
          }}
          >
          Cadastrar
        </button>
      </form>

      {mensagem && (
        <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
          {mensagem}
        </p>
      )}

      <h2 style={{ marginTop: '30px', color: '#343a40' }}>
        Itens cadastrados:
      </h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {itens.map((item) => (
          <li
          key={item.id}
          style={{
            background: '#ffffff',
            padding: '10px',
            marginBottom: '8px',
            borderRadius: '4px',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
            >
            <strong style={{ color: '#007bff' }}>{item.nome}</strong> -{' '}
            {item.descricao} ({item.categoria})<br />
            Região: {item.regiao} | Bairro: {item.bairro}
            <br />
            {item.fotoUrl && (
              <img
              src={item.fotoUrl}
              alt="Foto do Produto"
              style={{ marginTop: '10px', maxWidth: '100%' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
        </>
  
  );
};

export default CadastroItem;

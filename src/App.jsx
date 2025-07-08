import React, { useState } from 'react';

function CadastroItem() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [suaregião, setsuaregião] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novoItem = {
      nome,
      descricao,
      categoria,
      suaregião,
    
    };

    try {
      const response = await fetch('/api/itens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoItem),
      });

      if (response.ok) {
        alert('Item cadastrado com sucesso!');
        // Limpar o formulário
        setNome('');
        setSuaregião("");
        setDescricao('');
        setCategoria('');
      } else {
        alert('Erro ao cadastrar item.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        Sua região:
        <textarea>
          valeu={suaregião}
          onChange={(e) => setSuaregião(e.target.value)}
         </textarea>
      </label>
      <br />
      <label>
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </label>
      <br />
      <label>
        Categoria:
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          />
        </label>
          <option value="">Selecione...</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="livros">Livros</option>
          <option value="roupas">Roupas</option>
          <option valeu="brinquedos">Brinquedos</option>
      <select>
      </select>
    <button type="submit">Cadastrar</button>
     </form>
   );
  };


   export default CadastroItem;

import React from 'react';
import '../App.css';

function Cardapio({produtos, onPedir}) {
  const renderProduto = (produto) => {
    return (
      <tr key={"produto_" + produto._id}>
        <td><img src={produto.foto}/></td>
        <td>{produto.nome}</td>
        <td>{produto.tipo}</td>
        <td>R$ {produto.valor.toFixed(2)}</td>
        <td><button href="#" className="myButton" onClick={() => onPedir(produto)}>Pedir</button></td>
      </tr>
    );
  };

  return (
    <div className="table-cardapio">
      <div className="header">Cardápio</div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Pedir</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(renderProduto)}
        </tbody>
      </table>
    </div>
  );
};

export default Cardapio;
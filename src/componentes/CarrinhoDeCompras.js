import React, {useState} from 'react';
import '../App.css';
import StatusPedido from '../entidades/StatusPedido';

function CarrinhoDeCompras({pedidos, onCancelar}) {
  const [escondido, setEscondido] = useState(true);

  const calculaTotal = () => {
    let total = 0.0;
    pedidos.forEach(p => total += p.valor);
    return total;
  };

  const renderPedido = (pedido, indice) => {
    return (
      <tr key={"pedido_" + indice}>
        <td><img src={pedido.foto}/></td>
        <td>{pedido.nome}</td>
        <td>{pedido.tipo}</td>
        <td>R$ {pedido.valor.toFixed(2)}</td>
        <td>{pedido.status}</td>
        <td>
          { pedido.status === StatusPedido.NA_FILA ?  (
            <button  className="myButton" onClick={() => onCancelar(indice)}>Cancelar</button>
          ) : (
            <span>-</span>
          )}
        </td>
      </tr>
    );
  };

  const toggleEscondido = () => {
    setEscondido(!escondido);
  };

  return (
    <div className="table-cardapio">
      <div className="header" onClick={() => toggleEscondido()}>
        Pedidos - 💰 R$ {calculaTotal().toFixed(2)}
        <span>
          {escondido ? "🡣" : "🡡"}
        </span>
      </div>
      <table cellSpacing="0" className={escondido ? "escondido" : ""}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Cancelar</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(renderPedido)}
        </tbody>
      </table>
    </div>
  );
};

export default CarrinhoDeCompras;
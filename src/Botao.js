import React, {useState} from 'react';

function Botao() {
  const [cliques, setCliques] = useState(0);
  const fuiClicado = () => {
    setCliques(cliques + 1);
  };
  return (
    <button onClick={() => fuiClicado()}>
      Clique-me - Fui clicado {cliques} vezes
    </button>
  );
}

export default Botao;

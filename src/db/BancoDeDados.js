import TipoDeProduto from '../entidades/TipoDeProduto';
import Produto from '../entidades/Produto';

const produtos = [
  new Produto('Coca-Cola Lata', 3.0, TipoDeProduto.BEBIDA, 'https://d3efjz1jvymzgz.cloudfront.net/Custom/Content/Products/10/11/1011792_refrigerante-coca-cola-lata-350ml-fardo-c-12-unidades_m1_637051111791632885.png'),
  new Produto('Suco de Laranja - Jarra', 8.0, TipoDeProduto.BEBIDA, 'https://image.freepik.com/fotos-gratis/jarra-de-suco-de-laranja-e-frutas-laranja-isoladas_80510-975.jpg'),
  new Produto('Batata Frita', 11.0, TipoDeProduto.PETISCO, 'https://cdn.panelinha.com.br/receita/953607600000-Batata-frita-tradicional.jpg'),
  new Produto('Pão de Alho', 10.0, TipoDeProduto.PETISCO, 'https://teretetenacozinha.com.br/wp-content/uploads/2019/02/P%C3%A3o-de-Alho-com-requeij%C3%A3o.png'),
  new Produto('Filé a Parmegiana', 18.0, TipoDeProduto.REFEICAO, 'https://leianoticias.com.br/wp-content/uploads/Fil%C3%A9-capa.jpg'),
  new Produto('Feijoada', 35.0, TipoDeProduto.REFEICAO, 'https://img.cybercook.com.br/receitas/776/feijoada-623x350.jpeg')
];


const BancoDeDados = {
  getProdutos: () => produtos
};

export default BancoDeDados;
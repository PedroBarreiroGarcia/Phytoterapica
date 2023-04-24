
import './App.css';
import Botoes from './Components/Botoes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Icones_inform from './Components/Icones_inform';
import Inscreva_se from './Components/Inscreva_se';
import Nav from './Components/Nav';
import Sessao_img from './Components/Sessao_img';
import Sessao_produtos from './Components/Sessao_produtos';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Sessao_img/>
      <Botoes/>

      <div className="sessao_produtos">
        
        <div className="container" > 
          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" descricaoProduto="Óleo Essencial de Lavanda (gt. França) - 10ml" valor="R$ 60,00" parcelamento="(ou em até 3x de R$ 20,00 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156011/Mockup_Caixa_OE_Alecrim_5ml_1000x1000px.jpg?v=637976472901970000" descricaoProduto="Óleo Essencial de Alegrim (qt. Cineol) - 5ml" valor="R$ 28,00" parcelamento="(ou em até 3x de R$ 9,33 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" descricaoProduto="Óleo Essencial de Alecrim (qt. Cineol) - 10ml" valor="R$ 37,00" parcelamento="(ou em até 3x de R$ 12,33 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=637725609590700000" descricaoProduto="Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml" valor="R$ 52,00" parcelamento="(ou em até 3x de R$ 17,33 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" descricaoProduto="Óleo Essencial de Melaleuca (Tea Tree) - 10ml" valor="R$ 50,00" parcelamento="(ou em até 3x de R$ 16,66 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155886/oleo-essencial-laranja-organico-10ml-phytoterapica-01.jpg?v=637753643540330000" descricaoProduto="Óleo Essencial de Laranja (Orgânico) - 10ml" valor="R$ 26,00" parcelamento="(ou em até 3x de R$ 8,66 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155820/oleo-essencial-eucalipto-globulus-10ml-phytoterapica-01.jpg?v=637725633480370000" descricaoProduto="Óleo Essencial de Eucalipto Globulus - 10ml" valor="R$ 35,20" parcelamento="(ou em até 3x de R$ 17,73 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155738/oleo-essencial-manjericao-10ml-phytoterapica-caixa.jpg?v=637717166545830000" descricaoProduto="Óleo Essencial de Manjericão (qt. Methil Chavicol) - 10ml" valor="R$ 38,00" parcelamento="(ou em até 3x de R$ 12,66 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156013/Mockup_Caixa_OE_Melaleuca_5ml_1000x1000px.jpg?v=637976535392430000" descricaoProduto="Óleo Essencial de Melaleuca (Tea Tree) - 5ml" valor="R$ 39,20" parcelamento="(ou em até 3x de R$ 13,06 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156000/Mockup_Caixa_OE_Lavanda_5ml_1000x1000px.jpg?v=637975742756530000" descricaoProduto="Óleo Essencial de Lavanda (gt. França) - 5ml" valor="R$ 47,02" parcelamento="(ou em até 3x de R$ 15,67 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155415/_leo_essencial_de_lim_o-tahiti_10ml_-_phytoterapica_1_.jpg?v=637653490559770000" descricaoProduto="Óleo Essencial de Limão-Tahiti - 10ml" valor="R$ 34,20" parcelamento="(ou em até 3x de R$ 11,40 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155552/oleo-essencial-lemongrass-organico-10ml-phytoterapica-caixa.jpg?v=637655992663170000" descricaoProduto="Óleo Essencial de Lemongrass (Orgânico) - 10ml" valor="R$ 39,00" parcelamento="(ou em até 3x de R$ 13,00 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155525/_leo_essencial_de_erva-doce_5ml_-_phytoterapica_1_.jpg?v=637655357623270000" descricaoProduto="Óleo Essencial de Erva-Doce (Funcho) - 5ml" valor="R$ 84,00" parcelamento="(ou em até 3x de R$ 28,00 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155539/_leo_essencial_de_s_lvia_esclareia_5ml_-_phytoterapica_1_.jpg?v=637655799653700000" descricaoProduto="Óleo Essencial de Sálvia Esclareia - 5ml" valor="R$ 51,20" parcelamento="(ou em até 3x de R$ 17,06 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155561/oleo-essencial-sandalo-5ml-phytoterapica-a.jpg?v=637656006733500000" descricaoProduto="Óleo Essencial de Sândalo Amyris - 5ml" valor="R$ 59,00" parcelamento="(ou em até 3x de R$ 19,66 sem juros)" />

          <Sessao_produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156061/_leo_essencial_de_canela_cassia_10ml_-_phytoterapica_2_.jpg?v=638035380482830000" descricaoProduto="Óleo Essencial de Canela Cássia - 10ml" valor="R$ 50,00" parcelamento="(ou em até 3x de R$ 16,66 sem juros)" />        
        </div> 

      </div>
      
      <Inscreva_se/>
      <Icones_inform/>
      <Footer/>

    </div>
  );
}

export default App;

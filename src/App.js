
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
          <Sessao_produtos foto="http://localhost:3000/oleo_lavanda.svg" descricaoProduto="Óleo Essencial de Lavanda (gt. França) - 10ml" valor="R$ 60,00" parcelamento="(ou em até 3x de R$ 20,00 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_alecrim_5ml.webp" descricaoProduto="Óleo Essencial de Alegrim (qt. Cineol) - 5ml" valor="R$ 28,00" parcelamento="(ou em até 3x de R$ 9,33 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_alecrim.webp" descricaoProduto="Óleo Essencial de Alecrim (qt. Cineol) - 10ml" valor="R$ 37,00" parcelamento="(ou em até 3x de R$ 12,33 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_hortela_pimenta.webp" descricaoProduto="Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml" valor="R$ 52,00" parcelamento="(ou em até 3x de R$ 17,33 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="http://localhost:3000/oleo_malaeluca_10ml.webp" descricaoProduto="Óleo Essencial de Melaleuca (Tea Tree) - 10ml" valor="R$ 50,00" parcelamento="(ou em até 3x de R$ 16,66 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_laranja_10ml.webp" descricaoProduto="Óleo Essencial de Laranja (Orgânico) - 10ml" valor="R$ 26,00" parcelamento="(ou em até 3x de R$ 8,66 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_eucalipto_10ml.webp" descricaoProduto="Óleo Essencial de Eucalipto Globulus - 10ml" valor="R$ 35,20" parcelamento="(ou em até 3x de R$ 17,73 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_manjericao_10ml.webp" descricaoProduto="Óleo Essencial de Manjericão (qt. Methil Chavicol) - 10ml" valor="R$ 38,00" parcelamento="(ou em até 3x de R$ 12,66 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="http://localhost:3000/oleo_malaeluca_5ml.webp" descricaoProduto="Óleo Essencial de Melaleuca (Tea Tree) - 5ml" valor="R$ 39,20" parcelamento="(ou em até 3x de R$ 13,06 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_lavanda_5ml.webp" descricaoProduto="Óleo Essencial de Lavanda (gt. França) - 5ml" valor="R$ 47,02" parcelamento="(ou em até 3x de R$ 15,67 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_limao_tahiti_10ml.webp" descricaoProduto="Óleo Essencial de Limão-Tahiti - 10ml" valor="R$ 34,20" parcelamento="(ou em até 3x de R$ 11,40 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_lemongrass_10ml.webp" descricaoProduto="Óleo Essencial de Lemongrass (Orgânico) - 10ml" valor="R$ 39,00" parcelamento="(ou em até 3x de R$ 13,00 sem juros)" />        
        </div> 

        <div className="container" > 
          <Sessao_produtos foto="http://localhost:3000/oleo_erva_doce_5ml.webp" descricaoProduto="Óleo Essencial de Erva-Doce (Funcho) - 5ml" valor="R$ 84,00" parcelamento="(ou em até 3x de R$ 28,00 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_salvia_esclareia_5ml.webp" descricaoProduto="Óleo Essencial de Sálvia Esclareia - 5ml" valor="R$ 51,20" parcelamento="(ou em até 3x de R$ 17,06 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_limao_tahiti_10ml.webp" descricaoProduto="Óleo Essencial de Limão-Tahiti - 10ml" valor="R$ 34,20" parcelamento="(ou em até 3x de R$ 11,40 sem juros)" />

          <Sessao_produtos foto="http://localhost:3000/oleo_canela_10ml.webp" descricaoProduto="Óleo Essencial de Canela Cássia - 10ml" valor="R$ 50,00" parcelamento="(ou em até 3x de R$ 16,66 sem juros)" />        
        </div> 

      </div>
      
      <Inscreva_se/>
      <Icones_inform/>
      <Footer/>

    </div>
  );
}

export default App;

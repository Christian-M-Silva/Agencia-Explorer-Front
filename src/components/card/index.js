import { Link } from 'react-router-dom';

function Card() {
    return (

      <section class="article-home">
      
      <article className="card-article">
          <img src="img/italia.png" alt="Bandeira da Italia" width="50px"/>
          <h4>Italia</h4>
          <p>Os principais pontos turísticos da Itália fazem do país um dos mais interessantes da Europa. A Itália é a casa de lugares imperdíveis como: Veneza, Roma, Milão, Florença, Pisa e inúmeras outras cidades. Ao planejar um roteiro de viagem para o país, você irá se deparar com a verdadeira felicidade ao notar que há locais para todos os gostos e interesses.</p>
          <Link to="../../promocoes">20% Off / Aproveite!</Link>
        </article>
      
        <article className="card-article">
          <img src="img/china.png" alt="Bandeira da China" width="50px"/>
          <h4>China</h4>
          <p>A China possui um enorme potencial turístico, proveniente de lindas paisagens naturais (montanhas, rios, fontes, cataratas, além de riquezas da fauna e flora). A China não se destaca somente no turismo em paisagens, pois existem também pontos culturais (arquitetura, monumentos, arte etc). Grande parte dos pontos turísticos chineses está inserida na lista do Patrimônio Mundial da Humanidade.</p>
            <Link to="../../promocoes">20% Off / Aproveite!</Link>
        </article>
      
        <article className="card-article">
          <img src="img/espanha.png" alt="Bandeira da Espanha" width="50px"/>
          <h4>Espanha</h4>
          <p>Monumentos antigos, mas que que ultrapassam o limite da palavra beleza na atualidade, museus e praias de tirar o fôlego, lindos palácios e muito mais, venha para a Espanha.</p>
          <Link to="../../promocoes">20% Off / Aproveite!</Link>
        </article>
      
      </section>
    
    );
  }
  
export default Card;
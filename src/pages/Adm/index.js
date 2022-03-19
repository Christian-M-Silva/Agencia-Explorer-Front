import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";

function Adm() {
    return (
      <div>
      <Helmet>
        <title>Área Administrativa</title>             
      </Helmet>
      <Header />
      <div className="container">         
          <main>             

            <section className="origem-destino">
              
              <h2><a className='text-white bold' href="/destino">Lista de Destinos</a></h2>
              <h2><a className='text-white bold' href="/origem">Lista de Origens</a></h2>
              <h2><a className='text-white bold' href="/usuario">Lista de Usuários</a></h2>

            </section>

            <h2 className="destinos-alta">Destinos em Promocao!</h2>
            <Contact /> 
          </main>
          <Footer />     
      </div> 
    </div>
    );
  }
  
  export default Adm;
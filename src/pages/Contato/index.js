import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";

function Contato() {
    return (
    
      <div>
      <Helmet>
        <title>Contato - Explore</title>             
      </Helmet>
      <Header />
      <div className="container">         
          <main>    

          <section className="origem-destino">
                <h4>Entre em Contato</h4>
                <p>Preencha o formulário para entrar em contato conosco, responderemos em até 2 horas!</p>
                <form action="#">
                    <input placeholder="Ajuda Sobre:" list="data-duvida" />
                    <datalist id="data-duvida">
                        <option value="Financeiro"/>
                        <option value="Como Comprar"/>
                        <option value="Comprar"/>
                        <option value="Outras"/>
                    </datalist>
                    <input type="text" placeholder="Nome:"/>
                    <input type="email" placeholder="E-mail:"/>
                    <input type="tel" id="phone" name="phone" placeholder="(xx)xxxxx-xxxx" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"/>
                    <textarea placeholder="Descreva" name="descreva" id="" cols="20" rows="5"></textarea><br/>
                    <button className="button-principal">Enviar</button>
                </form>
            </section>
             
          </main>
          <Footer />     
      </div> 
    </div>
     
    );
  }
  
  export default Contato;
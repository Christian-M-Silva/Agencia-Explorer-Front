import Header from '../../components/header';
import Footer from '../../components/footer';
import {Helmet} from "react-helmet";
import './script.js';

function Destinos() {
    return (
      <div>
      <Helmet>
      <title>Destinos - Explore</title>             
    </Helmet>
      <Header />
      <div className="container">
     
        <main>
    
          <section className="origem-destino">
            <h4>Destinos</h4>
            <p>Fala ai, qual vai ser sua próxima aventura?</p>
            <form action="#">
                        <label for="origem"></label>
                        <input placeholder="Origem: Estado" name="getorigem" list="data-origem"/>
                        
                        <datalist id="data-origem">
                            <option value="Rio de Janeiro">Rio de Janeiro</option> 
                            <option value="Sao Paulo">Sao Paulo</option>                      
                        </datalist>                    
                        
                        <label for="destino"></label>
                        <input placeholder="Destino: País/Estado" name="getdestino" list="data-destino"/>
                        <datalist id="data-destino">
                            <option value="França - Páris"/>
                            <option value="Alemanha - Berlim"/>
                            <option value="Espanha - Madri"/>
                            <option value="Bélgica - Bruxelas"/>
                            <option value="Dinamarca - Copenhague"/>
                        </datalist>
    
                        <label for="data-embarque"></label>
                        <input placeholder="Data Embarque:" required="required" class="date-embarque" type="text" onfocus="(this.type='date')"
                            onblur="(this.type='text')" id="date-embarque" />
    
                        <label for="data-desembarque"></label>
                        <input placeholder="Data Retorno:" required="required" class="date-retorno" type="text" onfocus="(this.type='date')" 
                            onblur="(this.type='text')" id="date-desembarque" />
    
                        <button class="button-principal" id="consultar">Consultar</button>
    
            </form>
            <div className="display-check">
              <div className="checking">
                <ul>
                  <li><span>Origem</span>
                  <div id="result1"></div></li>
                  <li><span>Destino</span>
                  <div id="result2"></div></li>
                  <li><span>Embarque</span>
                  <div id="result3"></div></li>
                  <li><span>Retorno</span>
                  <div id="result4"></div></li>
                </ul>
              </div>
              <div class="compra">
                <h2>
                  <span>Total</span> R$ 2.200,00
                </h2>
                <p>Formas de Pagamentos</p>
                <form action="">
    
                  <div className="radio-image">
                    <label for="master"> 
                      <input type="radio" name="pagamento" id="master" value="master"/> 
                      <img src="img/pagamento-master.svg" width="50px" alt="master"/>
                    </label> 
                    <label for="visa"> 
                      <input type="radio" name="pagamento" id="visa" value="visa"/> 
                      <img src="img/pagamento-visa.svg" width="50px" alt="visa"/>
                    </label>
                  </div>
    
                  <button class="button-principal">Comprar</button>
                </form>
              </div>
            </div>
          </section>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </main>
        <Footer />  
      
      </div>
    </div>
    );
  }
  
  export default Destinos;
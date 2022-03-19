import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";


function Home() {
  
  return (
    <div>
    <Helmet>
      <title>Explore - Home</title>             
    </Helmet>
    <Header />
    <div className="container">
        
        <main>
            <section className="banner-principal">
                <h1>O mundo é cheio de aventura, então nos deixe te ajudar a explorá-lo</h1>
                <p>
                   Faça seu login, ou cadastre para as suas próximas aventuras
                </p>
            </section>
                    
            <section className="login-cadastro">           
              <div className="login-home">
                <h4>
                  <img src="img/login-user-6.svg" alt="Login Usuario" width="20px"/>
                  Login
                </h4>
                <br/>
                <form action="#">
                  <label for="lemail"></label> 
                  <input type="email" placeholder="E-mail:" name="femail"/><br/> 
                  <label for="pass"></label>
                  <input type="password" placeholder="Senha:" name="pass"/><br/>
                  <button className="button-principal">Entrar</button>
                </form>
              </div>
            

              <div className="cadastro-home">
                <h4>Cadastre-se</h4>
                <br/>
                <form action="#">
                  <label for="lnome"></label> 
                  <input type="text" placeholder="Seu Nome:" id="lnome" name="fnome"/><br/> 
                  <label for="lemail"></label>
                  <input type="email" placeholder="Seu E-mail:" id="lemail" name="femail"/><br/> 
                  <label for="pass"></label> 
                  <input type="password" placeholder="Sua Senha:" id="pass" name="pass"/><br/>
                  <button className="button-principal">Cadastrar</button>
                </form>
              </div>
            </section>
            <Contact /> 
        </main>
        <Footer />     
    </div>
  
  </div>

  );
}

export default Home;

import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";


function Promocoes() {
    return (
      <div>
      <Helmet>
        <title>Promoções - Explore</title>             
      </Helmet>
      <Header />
      <div className="container">         
          <main>    

            <div class="page-tit">
              <h1>Economize na sua próxima aventura</h1>
            </div>
            
            <Card />
            <Contact /> 
          </main>
          <Footer />     
      </div> 
    </div>
    );
  }
  
  export default Promocoes;
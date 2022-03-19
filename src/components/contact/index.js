import { Link } from 'react-router-dom';
function Contact() {
    return (
        
        <aside className="card-news">
            <h3>Entre em contato</h3>
            <p>Nós cuidamos dos problems e você se diverte</p>
            <Link to="/contato">Clique Aqui! &#128526;</Link>
        </aside>
    
    );
  }
  
export default Contact;
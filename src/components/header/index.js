import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (

    <header>

    <nav className="menu-superior">  

        <div className="logotipo">
            <Link to="/">
            <img src="/img/Logo.PNG" alt="logotipo Explore" width="170px"/>
            </Link>
        </div>

        <div className="menuToggle">
            <input type="checkbox" />
            
            <div className="hamburger">
            <span></span>
            <span className="middle"></span>
            <span></span>
            <span className="x-line"></span>
            </div>
            
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destinos">Destinos</Link></li>
                    <li><Link to="/promocoes">Promoções</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li>
                    <Link to="/adm"> 
                        <img src="/login-user-6.svg" alt="Login Usuário" width="20px"/> Adm
                    </Link> 
                    </li>
                </ul>
            </div>

        </div>

        <div classNameName="menu-screen">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destinos">Destinos</Link></li>
                <li><Link to="/promocoes">Promoções</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li>
                <Link to="/adm"> 
                    <img src="/img/login-user-6.svg" alt="Login Usuário" width="20px"/> Adm
                </Link> 
                </li>
            </ul>
        </div>

    </nav>

    </header>

);
}

export default Header;
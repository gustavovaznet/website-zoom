//NAVBAR COMPONENT

//IMPORTING
import './styles.scss';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';

//NAVBAR
const Navbar = () => {
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo"><img src={logoImg} alt="Logo" /></a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">Sobre</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Serviços</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contato</a>
                        </li>
                    </ul>
                </div>
                <Button>Fazer Pedido!</Button>
            </nav>
        </header>    
    );
}

export default Navbar;

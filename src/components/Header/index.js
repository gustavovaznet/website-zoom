//HEADER COMPONENT

//IMPORTING
import homeImg from '../../assets/home.svg';
import './styles.scss';
import Button from '../../components/Button';

//HEADER
const Header = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">A Melhor Entrega<br /> do Seu Delivery Pessoal </h1>
                    <p className="home__description">Somos um delivery de tudo, com poucos clicks você poderá comprar o que quiser da onde quiser sem sair do conforto de casa.</p>
                    <Button>Saiba Mais</Button>
                </div>   
                <img src={homeImg} className="home__img" alt="Home" />
            </div>
        </section>
    );
}

export default Header;

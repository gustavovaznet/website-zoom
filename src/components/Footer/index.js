//FOOTER

//IMPORTING
import './styles.scss';
import logoImg from '../../assets/logo-white.svg';

//FOOTER
const Footer = () => {
    return(
        <>
            {/*CONTACT SECTION*/}
            <section className="contact section container" id="contact">
                <div className="contact__container grid">
                    <div className="contact__content">
                        <h2 className="section__title-center">Contato</h2>
                        <p className="contact__description">Entre em contato com a gente por aqui, 
                            atendemos via ligação, whatsapp ou chat.</p>
                    </div>
                    <ul className="contact__content grid">
                        <li className="contact__address">Telefone: <br /><span className="contact__information">+55 11 3333-3333</span></li>
                        <li className="contact__address">Whats: <br /><span className="contact__information">+55 11 8888-8888</span></li>
                        <li className="contact__address">Email:  <br /><span className="contact__information">contato@zoomdelivery.com</span></li>                        
                    </ul>
                    <div className="contact__content">
                        <a href="/" className="button">Nosso Chat</a>
                    </div>
                </div>
            </section>
            {/*FOOTER SECTION*/}
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="/" className="footer__logo">
                            <img src={logoImg} alt="Logo" />
                        </a>
                        <p className="footer__description">O Seu Melhor Delivery!</p>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">Links</h3>
                        <ul className="footer__links">
                            <li><a href="#home" className="footer__link">Home</a></li>
                            <li><a href="#about" className="footer__link">Sobre</a></li>
                            <li><a href="#services" className="footer__link">Serviços</a></li>
                            <li><a href="#contact" className="footer__link">Contato</a></li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">Links Úteis</h3>
                        <ul className="footer__links">
                            <li><a href="/" className="footer__link">Blog</a></li>
                            <li><a href="/" className="footer__link">Carreiras</a></li>
                            <li><a href="/" className="footer__link">Termos</a></li>
                            <li><a href="/" className="footer__link">Privacidade</a></li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">Comunidade</h3>
                        <ul className="footer__links">
                            <li><a href="/" className="footer__link">Suporte</a></li>
                            <li><a href="/" className="footer__link">Dúvidas</a></li>
                            <li><a href="/" className="footer__link">Ouvidoria</a></li>
                            <li><a href="/" className="footer__link">SAC</a></li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <a href="/" className="footer__social-link"><i className='bx bxl-instagram-alt'></i></a>
                        <a href="/" className="footer__social-link"><i className='bx bxl-twitter'></i></a>
                        <a href="/" className="footer__social-link"><i className='bx bxl-facebook-circle'></i></a>
                        <a href="/" className="footer__social-link"><i className='bx bxl-linkedin'></i></a>                        
                    </div>
                </div>
                <p className="footer__copy">&#169; Zoom Delivery 2021-2022 | Todos os direitos reservados</p>
            </footer>
        </>
    );
}

export default Footer;

//SERVICES COMPONENT

//IMPORTING
import appImg from '../../assets/app.svg';
import servicesImg01 from '../../assets/services-01.svg';
import servicesImg02 from '../../assets/services-02.svg';
import servicesImg03 from '../../assets/services-03.svg';
import './styles.scss'
import Button from '../../components/Button';

//SERVICES
const Services = () => {
    return(
        <>
            {/*SERVICES SECTION*/}
            <section className="services section container" id="services">
                <h2 className="section__title">Alguns de Nossos Serviços</h2>
                <div className="services__container grid">
                    <div className="services__data">
                        <h3 className="services__subtitle">Métodos de Pagamento Variados</h3>
                        <img src={servicesImg01} alt="Sevices" />
                        <p className="services__description">Pague com cartão de crédito, débito ou até mesmo fazendo um PIX.</p>
                        <div>
                            <Button>Saiba Mais</Button>
                        </div>
                    </div>
                    <div className="services__data">
                        <h3 className="services__subtitle">Melhores Opções para Comprar</h3>
                        <img src={servicesImg02} alt="Sevices" />
                        <p className="services__description">Encontre o produto que você precisa sem complicação e sem incertezas do que você estará recebendo.</p>
                        <div>
                            <Button>Saiba Mais</Button>
                        </div>
                    </div>
                    <div className="services__data">
                        <h3 className="services__subtitle">Entrega com Garantia</h3>
                        <img src={servicesImg03} alt="Sevices" />
                        <p className="services__description">O nosso processo de entrega é verificado do início ao fim garantindo a entrega do produto que desejar.</p>
                        <div>
                            <Button>Saiba Mais</Button>
                        </div>
                    </div>
                </div>
            </section>
            {/*APP SECTION*/}
            <section className="app section container">
                <div className="app__container grid">
                    <img src={appImg} alt="App" />
                    <div className="app__data">
                        <h2 className="section__title-center">Veja a sua entrega em tempo real!</h2>
                        <p className="app__description">No nosso App você consegue ver a sua entrega em tempo real, 
                        permitindo com que você se sinta ainda mais seguro e tendo em mente quando o seu produto vai chegar de maneira mais precisa!</p>
                        <div className="app__buttons">
                            <Button>
                                <i className='bx bxl-apple button__icon'></i> App Store
                            </Button>
                            <Button>
                                <i className='bx bxl-play-store button__icon' ></i> Google Play
                            </Button>
                        </div>
                    </div>                
                </div>
            </section>
        </>
        
    );
}

export default Services;

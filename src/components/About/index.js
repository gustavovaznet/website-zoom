//ABOUT COMPONENT

//IMPORTING
import aboutImg from '../../assets/about.svg';
import secImg from '../../assets/sec.svg';
import './styles.scss'

//ABOUT
    const About = () => {
        return(
            <div className="about__section">
                {/*ABOUT SECTION*/}
                <section className="about section container" id="about">                        
                    <div className="about__container grid">
                    <img src={aboutImg} alt="About" />
                        <div className="about__data">
                            <h2 className="section__title-center">Somos o seu melhor Delivery!</h2>
                            <p className="about__description">Somos mais que um só delivery, entregamos suas encomendas com agilidade, qualidade e  segurança.
                            A entrega em si é somente uma das partes do processo, queremos que você tenha a melhor experiência com a gente.
                            </p>
                        </div>                
                    </div>                   
                </section>
                {/*SECURITY SECTION*/}
                <section className="security section container">
                    <div className="security__container grid">
                        <div className="security__data">
                            <h2 className="section__title-center">A sua segurança é muito importante para nós!</h2>
                            <p className="security__description">Neste momento difícil que vivemos com a pandemia de COVID-19, queremos te dar a garantia de que 
                            iremos entregar suas encomendas seguindo todos os protocolos de segurança para garantir que sua saúde esteja fora de quaisquer riscos.
                            </p>
                        </div>
                        <img src={secImg} alt="Security" />                    
                    </div>
                </section>
            </div>                  
        );
    }

export default About;

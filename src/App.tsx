import './App.css'
import Information from './components/information'
import Nav from './components/nav'
import SlideTop from './components/slideTop'
import ImageMap1 from './assets/images/Img_Map1.png';
import ImageInfo2 from './assets/images/Screenshot 2024-11-2.png'
import Button from './components/button';
import { ButtonType } from './components/enums/ButtonType';
import bgInfo2 from './assets/images/Img_Bkg1.png';
import Plantas from './components/plantas';
import Conveniencia from './components/conveniencia';
import Gallery from './components/gallery';
import Vista from './components/vista';
import Footer from './components/footer';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='sp-header'>
        <Nav />
        <SlideTop />
      </div>
      <div id="informationOne" className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <Information
              spanText='Sublime em cada detalhe'
              title='Viva no melhor lugar de Perdizes'
              contentText='Viva em uma das areas mais prestigiadas e desejadas de São Paulo, cercado por infraestrutura de alto padrão, serviços exclusivos e comodidades que atendem a todas as suas necessidades. Desfrute de uma qualidade de vida incomparável, com conforto, segurança e o estilo de vida sofisticado que você merece.'
              buttonText='AGENDE SUA VISITA'
              linkButton='https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+agendar+uma+visita+ao+stand.'
            />
          </div>
          <div className="col-12 col-md-7 mt-4 mt-md-0 ps-md-5 ">
            <img className="informationOne_Image" src={ImageMap1} alt="Map 1" />
          </div>
        </div>
      </div>
      <div
        id="informationTwo"
        style={{
          backgroundImage: `url(${bgInfo2})`
        }}
      >
        <div className="container">
          <div
            className="row flex-sm-reverse"
          >
            <div
              className="col-12 col-md-6 pe-5"
              style={{
                position: 'relative',
                boxSizing: 'border-box'
              }}
            >
              <div
                className="info"
                style={{
                  backgroundImage: `url(${ImageInfo2})`
                }}
                onClick={() => {
                  handleShow()
                }}
              >
                <div className="buttonContent" onClick={e => e.stopPropagation()}>
                  <Button
                    text='Saiba mais'
                    type={ButtonType.secondary}
                    url="https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+o+empreendimento.+Meu+interesse+est%C3%A1+voltado+para+o+apartamento+de%3A"
                    style={{
                      width: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <div>
                <Information
                  spanText='Sublime em cada detalhe'
                  title='Viva no melhor bairro da Zona Oeste'
                  contentText='O Sublime Perdizes é um projeto exclusivo, cuidadosamente planejado para atender aos mais altos padrões de qualidade e conforto. Localizado em uma das áreas mais nobres de Säo Paulo, o bairro de Perdizes, oferece o equilíbrio perfeito entre modernidade, conveniência e tranquilidade, garantindo uma experiência de viver única para você.'
                  buttonText='ACESSE O BOOK'
                  linkButton='https://google.com/'
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <Plantas />
      <Conveniencia />
      <Gallery />
      <Vista />

      <Footer />

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <iframe height="500" src="https://www.youtube.com/embed/QzdbB6YnDEA?si=lVN6W5zN8uMnZ9dA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Modal>
    </>
  )
}

export default App

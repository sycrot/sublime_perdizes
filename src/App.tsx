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

function App() {
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
              contentText='Viva em uma das areas mais prestigiadas e desejadas de Säo Paulo, cercado por infraestrutura de alto padrão, serviços exclusivos e comodidades que atendem a todas as suas necessidades. Desfrute de uma qualidade de vida incomparável, com conforto, segurança e o estilo de vida sofisticado que você merece.'
              buttonText='AGENDE SUA VISITA'
              linkButton='https://google.com/'
            />
          </div>
          <div className="col-12 col-md-7 ps-5">
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
              >
                <div className="buttonContent">
                  <Button
                    text='Saiba mais'
                    type={ButtonType.secondary}
                    url="https://google.com/"
                    style={{
                      width: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
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
    </>
  )
}

export default App

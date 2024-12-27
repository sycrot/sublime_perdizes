import styles from './styles.module.scss';
import { Carousel } from 'react-bootstrap';
import { ISlideTop } from '../../types/ISlideTop';
import Image1 from '../../assets/images/Img_BnCapa2.png';
import Image2 from '../../assets/images/Img_BnCapa3.png';
import Image3 from '../../assets/images/Img_BnCapa4.png';
import Button from '../button';
import { ButtonType } from '../enums/ButtonType';
import { useState } from 'react';

const slideItems: ISlideTop[] = [
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+o+empreendimento.+Meu+interesse+est%C3%A1+voltado+para+o+apartamento+de%3A',
    imageUrl: Image1
  },
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+o+empreendimento.+Meu+interesse+est%C3%A1+voltado+para+o+apartamento+de%3A',
    imageUrl: Image2
  },
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+o+empreendimento.+Meu+interesse+est%C3%A1+voltado+para+o+apartamento+de%3A',
    imageUrl: Image3
  },
]

function SlideTop() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? slideItems.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === slideItems.length - 1 ? 0 : index + 1);
  };

  return (
    <div className={styles.Slideshow}>
      <Carousel
        indicators={false}
        interval={800000}
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          flexGrow: 1
        }}
      >
        {slideItems.map((slide, index) => (
          <Carousel.Item
            key={index}
          >
            <div className={styles.image}>
              <img
                className="d-block w-100"
                src={slide.imageUrl}
                alt={slide.title}
              />
              <div className={styles.slideHeader}>
                <h1>{slide.title}</h1>
                <div className={styles.subtitle}>
                  <div>
                    <h5>{slide.subtitle}</h5>
                  </div>
                  <span>{slide.span}</span>
                </div>
              </div>
            </div>
            <Carousel.Caption style={{ zIndex: 1000 }}>
              <Button
                text="FALE COM A CORRETORA"
                type={ButtonType.primary}
                url={slide.link}
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={`container ${styles.controls}`}>
        <a className="carousel-control-prev" role="button" data-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div >
  )
}

export default SlideTop;
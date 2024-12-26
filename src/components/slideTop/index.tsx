import styles from './styles.module.scss';
import { Carousel } from 'react-bootstrap';
import { ISlideTop } from '../../types/ISlideTop';
import Image1 from '../../assets/images/Img_BnCapa2.png';
import Image2 from '../../assets/images/Img_BnCapa3.png';
import Image3 from '../../assets/images/Img_BnCapa4.png';
import Button from '../button';
import { ButtonType } from '../enums/ButtonType';

const slideItems: ISlideTop[] = [
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://google.com/',
    imageUrl: Image1
  },
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://google.com/',
    imageUrl: Image2
  },
  {
    title: 'Sublime',
    subtitle: 'Pompeia',
    span: 'O melhore em todos os sentidos',
    link: 'https://google.com/',
    imageUrl: Image3
  },
]

function SlideTop() {
  return (
    <div className={styles.Slideshow}>
      <Carousel
        indicators={false}
        interval={800000}
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
            <Carousel.Caption>
              <Button
                text="FALE COM A CORRETORA"
                type={ButtonType.primary}
                url={slide.link}
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default SlideTop;
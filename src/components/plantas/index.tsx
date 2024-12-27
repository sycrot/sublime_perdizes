/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from 'react-bootstrap';
import { IPlantasProps } from './props';
import styles from './styles.module.scss';
import Image1 from '../../assets/images/img228.png';
import Image2 from '../../assets/images/plantas/img238.png';
import Image3 from '../../assets/images/plantas/img243.png';
import Image4 from '../../assets/images/plantas/img251.png';
import Image5 from '../../assets/images/plantas/img256.png';
import Image6 from '../../assets/images/plantas/img261.png';
import Image7 from '../../assets/images/plantas/img266.png';
import Image8 from '../../assets/images/plantas/img271.png';
import Image9 from '../../assets/images/plantas/img277.png';
import Image10 from '../../assets/images/plantas/img233.png';
import Button from '../button';
import ArrowRight from '../../assets/icons/unicons-arrow-r.png'
import { ButtonType } from '../enums/ButtonType';

const PlantasItems = [
  {
    title: 'Studio - 27.95m<sup>2</sup>',
    image: Image1
  },
  {
    title: 'Studio - 28,74m<sup>2</sup>',
    image: Image10
  },
  {
    title: 'Studio - 30.94m<sup>2</sup>',
    image: Image2
  },
  {
    title: 'Studio - 43.81m<sup>2</sup>',
    image: Image3
  },
  {
    title: '1 Dorm com Vaga - 34.56m<sup>2</sup>',
    image: Image4
  },
  {
    title: '2 Dorms com Suíte e Vaga - 47,52m<sup>2</sup> Churrasqueira a Carvão',
    image: Image5
  },
  {
    title: '2 Dorms com Suíte e Vaga - 52,21m<sup>2</sup> Churrasqueira a Carvão',
    image: Image6
  },
  {
    title: '2 Dorms com Suíte e Vaga - 52,97m<sup>2</sup> Churrasqueira a Carvão',
    image: Image7
  },
  {
    title: '3 Dorms com Suíte e Vaga demarcada - 75,88m<sup>2</sup> Churrasqueira a Carvão',
    image: Image8
  },
  {
    title: '3 Dorms com Suíte e Vaga demarcada - 77,67m<sup>2</sup> Churrasqueira a Carvão',
    image: Image9
  },
]

function Plantas() {
  return (
    <div className={styles.plantas}>
      <div className="container">
        <div className={styles.header}>
          <span>Sublime em cada detalhe</span>
          <h1>Plantas Disponíveis</h1>
        </div>
        <div className={styles.slide}>
          <Carousel
            indicators={false}
            interval={800000}
            style={{
              flexGrow: 1
            }}
          >
            {PlantasItems.map((item, key) => (
              <Carousel.Item key={key}>
                <div className={styles.carouselItem}>
                  <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                  <img src={item.image} alt={item.title} />
                </div>
              </Carousel.Item>
            ))}

          </Carousel>
        </div>
        <div className={styles.actions}>
          <Button
            type={ButtonType.primary}
            text='CONSULTE VALORES'
            icon={ArrowRight}
            url='https://wa.me/5511932393570?text=Ol%C3%A1%2C+D%C3%A9bora%21+Tudo+bem%3F+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+o+empreendimento.+Meu+interesse+est%C3%A1+voltado+para+o+apartamento+de%3A'
          />
        </div>
      </div>
    </div>
  )
}

export default Plantas;
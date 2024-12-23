/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from 'react-bootstrap';
import { IPlantasProps } from './props';
import styles from './styles.module.scss';
import Image1 from '../../assets/images/img228.png';
import Button from '../button';
import ArrowRight from '../../assets/icons/unicons-arrow-r.png'
import { ButtonType } from '../enums/ButtonType';

const PlantasItems = [
  {
    title: 'Studio - 27.95m<sub>2</sub>',
    image: Image1
  }
]

function Plantas(props: IPlantasProps) {
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
            url='https://google.com/'
          />
        </div>
      </div>
    </div>
  )
}

export default Plantas;
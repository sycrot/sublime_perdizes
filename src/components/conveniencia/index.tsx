import styles from './styles.module.scss';
import BgImage from '../../assets/images/Img_Fachada2_Filter.png';
import Image1 from '../../assets/images/conveniencia1.png';
import Image2 from '../../assets/images/conveniencia2.png';
import Image3 from '../../assets/images/conveniencia3.png';
import ArrowRight from '../../assets/icons/unicons-arrow-r-2.png';
import Button from '../button';
import { ButtonType } from '../enums/ButtonType';

function Conveniencia() {
  return (
    <div
      className={styles.conveniencia}
      style={{
        backgroundImage: `url(${BgImage})`
      }}
    >
      <div className="container">
        <div className={styles.header}>
          <h1>Conveniência Completa</h1>
          <span>Lazer completo e áreas comuns para todas as idades.</span>
        </div>
        <div className={`${styles.content}`}>
          <div>
            <img src={Image1} />
          </div>
          <div>
            <img src={Image2} />
          </div>
          <div>
            <img src={Image3} />
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            text='SOLICITE O E-BOOK'
            type={ButtonType.secondary}
            icon={ArrowRight}
            url="https://www.diariodois.com.br/vid/BookSublime1.pdf"
          />
        </div>
      </div>
    </div>
  )
}

export default Conveniencia
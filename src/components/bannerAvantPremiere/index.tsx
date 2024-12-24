import styles from './styles.module.scss';
import Background from '../../assets/images/Img_Fachada2_Filter.png';
import { CSSProperties } from 'react';
import Button from '../button';
import { ButtonType } from '../enums/ButtonType';
import ArrowRight from '../../assets/icons/unicons-arrow-r-2.png'

function BannerAvantPremiere(props: { style?: CSSProperties }) {
  return (
    <div
      className={styles.avantPremiere}
      style={{
        ...props.style,
      }}
    >
      <div
        className={`container`}
      >
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <div className={styles.content}>
            <h1>Avant Premiere</h1>
            <p>Os primeiros 40 clientes teräo a vantagem de escolher entre todas as unidades disponíveis no prédio e aproveitar os preços da primeira tabela.</p>
          </div>
          <div>
            <Button
              type={ButtonType.secondary}
              text='CADASTRE-SE'
              icon={ArrowRight}
              url="https://google.com/"
              style={{
                width: '304px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerAvantPremiere;
import styles from './styles.module.scss';
import Background from '../../assets/images/Img_Bkg2.png';
import BannerAvantPremiere from '../bannerAvantPremiere';

function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <BannerAvantPremiere />
      <div className="container">
        <div className={styles.header}>
          <h1>SUBLIME</h1>
          <span>POMPEIA</span>
        </div>
        <div className={styles.content}>
          <p>O MELHOR EM TODOS OS SENTIDOS</p>
          <span>O material apresentado é de propriedade da incorporadora<br /> e foi distribuído exclusivamente para sua equipe de vendas para fins comerciais</span>
        </div>
        <div className={styles.corretora}>
          <h6>Corretora Debora</h6>
          <p>CRECI 227.545-F</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import styles from './styles.module.scss';
import CorretoraDebora from '../../assets/images/FotoDebora1.png';
import WppIcon from '../../assets/icons/whatsapp.png'

function Nav() {
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className={styles.items}>
          <div className="">
            <div className={`${styles.item} flex-column flex-md-row`}>
              <div className={styles.corretor}>
                <img src={CorretoraDebora} alt="Corretora Debora" />
              </div>
              <p>Corretora Debora</p>
            </div>
          </div>
          <div className="text-center mt-4 mt-md-0">
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={WppIcon} alt="Whats App" />
              </div>
              <p>(11) 93239-3570</p>
            </div>
          </div>
          <div className="text-center mt-4 mt-md-0">
            <div className={styles.item}>
              <p>CRECI 227.545-F</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
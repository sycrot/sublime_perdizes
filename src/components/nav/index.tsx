import * as React from 'react';
import styles from './styles.module.scss';
import CorretoraDebora from '../../assets/images/FotoDebora1.png';
import WppIcon from '../../assets/icons/whatsapp.png'

function Nav() {
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-center">
            <div className={styles.item}>
              <div className={styles.corretor}>
                <img src={CorretoraDebora} alt="Corretora Debora" />
              </div>
              <p>Corretora Debora</p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={WppIcon} alt="Whats App" />
              </div>
              <p>(11) 93239-3570</p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
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
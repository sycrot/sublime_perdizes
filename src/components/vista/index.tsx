import styles from './styles.module.scss';

function Vista() {
  return (
    <div className={styles.vista}>
      <div className="container">
        <div className={styles.header}>
          <h1>Uma Vista Privilegiada</h1>
          <p>Assista o video e veja a sua melhor vista de São Paulo</p>
        </div>
        <div className={`row ${styles.content}`}>
          <div className="col-12 col-md-6">
            <h4>Vista Pompeia</h4>
            <div className={styles.videoDefault}>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>Vista Bairro</h4>
            <div className={styles.videoDefault}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vista;
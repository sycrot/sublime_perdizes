import { useState } from 'react';
import styles from './styles.module.scss';
import { Modal } from 'react-bootstrap';

function Vista() {
  const [show, setShow] = useState(false);
  const [videoCurrent, setVideoCurrent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (url: string) => {
    setShow(true)
    setVideoCurrent(url);
  };


  return (
    <>
      <div className={styles.vista}>
        <div className="container">
          <div className={styles.header}>
            <h1>Uma Vista Privilegiada</h1>
            <p>Assista o video e veja a sua melhor vista de São Paulo</p>
          </div>
          <div className={`row ${styles.content}`}>
            <div className="col-12 col-md-6">
              <h4>Vista Pompeia</h4>
              <div
                className={styles.videoDefault}
                onClick={() => handleShow("https://www.youtube.com/embed/QzdbB6YnDEA?si=lVN6W5zN8uMnZ9dA")}
              >
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h4>Vista Bairro</h4>
              <div
                className={styles.videoDefault}
                onClick={() => handleShow("https://www.youtube.com/embed/StNqF4FaD9k?si=taoAC4Q4Nmvf6-L1")}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <iframe height={500} src={videoCurrent} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Modal>
    </>
  )
}

export default Vista;
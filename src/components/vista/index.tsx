import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Modal } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';

function Vista() {
  const [show, setShow] = useState(false);
  const [videoCurrent, setVideoCurrent] = useState('');
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const handleClose = () => setShow(false);
  const handleShow = (url: string) => {
    setShow(true)
    setVideoCurrent(url);
  };

  useEffect(() => {
    if (video1Ref && video1Ref.current) {
      video1Ref.current.addEventListener('loadedmetadata', function () {
        if (video1Ref && video1Ref.current)
          video1Ref.current.currentTime = 5;
      })
    }
  }, [video1Ref])

  useEffect(() => {
    if (video2Ref && video2Ref.current) {
      video2Ref.current.addEventListener('loadedmetadata', function () {
        if (video2Ref && video2Ref.current)
          video2Ref.current.currentTime = 7;
      })
    }
  }, [video2Ref])

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
                onClick={() => handleShow("https://www.diariodois.com.br/vid/VistaPompeia1.mp4")}
              >
                <button>
                  <FaPlayCircle
                    size={120}
                    color='white'
                    opacity={.7}
                  />
                </button>
                <video
                  style={{
                    width: '105%',
                    height: '120%'
                  }}
                  ref={video1Ref}
                >
                  <source src="https://www.diariodois.com.br/vid/VistaPompeia1.mp4" />
                </video>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
              <h4>Vista Bairro</h4>
              <div
                className={styles.videoDefault}
                onClick={() => handleShow("https://www.diariodois.com.br/vid/VistaBairro1.mp4")}
              >
                <button>
                  <FaPlayCircle
                    size={120}
                    color='white'
                    opacity={.7}
                  />
                </button>
                <video
                  style={{
                    width: '105%',
                    height: '120%'
                  }}
                  ref={video2Ref}
                >
                  <source src="https://www.diariodois.com.br/vid/VistaBairro1.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <video
          height="650"
          controls
          autoPlay
        >
          <source src={videoCurrent} />
        </video>
      </Modal>
    </>
  )
}

export default Vista;
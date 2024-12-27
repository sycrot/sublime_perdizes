import styles from './styles.module.scss';
import Image1 from '../../assets/images/gallery/1.png';
import Image2 from '../../assets/images/gallery/2.png';
import Image3 from '../../assets/images/gallery/3.png';
import Image4 from '../../assets/images/gallery/4.png';
import Image5 from '../../assets/images/gallery/5.png';
import Image6 from '../../assets/images/gallery/6.png';
import Image7 from '../../assets/images/gallery/7.png';
import Image8 from '../../assets/images/gallery/8.png';
import Image9 from '../../assets/images/gallery/9.png';
import Image10 from '../../assets/images/gallery/10.png';
import Image11 from '../../assets/images/gallery/11.png';
import Image12 from '../../assets/images/gallery/12.png';
import { Carousel, Modal } from 'react-bootstrap';
import { useState } from 'react';

const images = [
  {
    url: Image1
  },
  {
    url: Image2
  },
  {
    url: Image3
  },
  {
    url: Image4
  },
  {
    url: Image5
  },
  {
    url: Image6
  },
  {
    url: Image7
  },
  {
    url: Image8
  },
  {
    url: Image9
  },
  {
    url: Image10
  },
  {
    url: Image11
  },
  {
    url: Image12
  },
]

function Gallery() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={`container`}>
          <div className={styles.gallery}>
            {images.map((image, index) => (
              <div className={styles.image} onClick={() => handleSelect(index)}>
                <img src={image.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        centered
        style={{
          maxWidth: '100%'
        }}
        size='lg'
      >
        <Modal.Header closeButton>
        </Modal.Header>

        <Carousel
          interval={800000}
          activeIndex={index}
          onSelect={handleSelect}
          className={styles.carousel}
        >
          {images.map(image => (
            <Carousel.Item>
              <img src={image.url} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </>

  )
}

export default Gallery;
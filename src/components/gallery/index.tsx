import styles from './styles.module.scss';
import Image1 from '../../assets/images/gallery/1.jpg';
import Image2 from '../../assets/images/gallery/2.jpg';
import Image3 from '../../assets/images/gallery/3.jpg';
import Image4 from '../../assets/images/gallery/4.jpg';
import Image5 from '../../assets/images/gallery/5.jpg';
import Image6 from '../../assets/images/gallery/6.jpg';
import Image7 from '../../assets/images/gallery/7.jpg';
import Image8 from '../../assets/images/gallery/8.jpg';
import Image9 from '../../assets/images/gallery/9.jpg';
import Image10 from '../../assets/images/gallery/10.jpg';
import Image11 from '../../assets/images/gallery/11.jpg';
import Image12 from '../../assets/images/gallery/12.jpg';
/* import Image13 from '../../assets/images/gallery/13.jpg';
import Image14 from '../../assets/images/gallery/14.jpg';
import Image15 from '../../assets/images/gallery/15.jpg';
import Image16 from '../../assets/images/gallery/16.jpg';
import Image17 from '../../assets/images/gallery/17.jpg';
import Image18 from '../../assets/images/gallery/18.jpg';
import Image19 from '../../assets/images/gallery/19.jpg';
import Image20 from '../../assets/images/gallery/20.jpg';
import Image21 from '../../assets/images/gallery/21.jpg';
import Image22 from '../../assets/images/gallery/22.jpg'; */
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
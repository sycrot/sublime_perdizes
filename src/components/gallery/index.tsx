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
  return (
    <div className={styles.galleryContainer}>
      <div className={`container`}>
        <div className={styles.gallery}>
          {images.map(image => (
            <div className={styles.image}>
              <img src={image.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery;
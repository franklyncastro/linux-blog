import Carousel from 'react-bootstrap/Carousel';
import style from '../styles/Carousel.module.css'


function CarouselImg() {
  return (
    <Carousel className={style.container} >
      <Carousel.Item>
        <img
          className={style.img}
          src="https://images.pling.com/img/00/00/46/57/62/1309060/e197b0dc3d4f9a36a0cabfbdbab00e4bba12.png"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Ubuntu</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://wallpaperaccess.com/full/981869.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://wallpaperaccess.com/full/314942.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImg;
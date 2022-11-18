import Carousel from 'react-bootstrap/Carousel';
import "../slider/Slider.css"
import Image from "../about/autoBoxMatic.jpeg"
import ImageTwo from "../about/autoBoxMatic2.jpeg"
import ImageThree from "../about/autoBoxMatic3.jpeg"

function CarouselFadeExample() {
  return (
    <Carousel className='carousel-container' fade>
      <Carousel.Item className='container-image'>
        <img
          className="image"
          src={Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='description-box'>
            <h3>First  label</h3>
            <p>Nulla vitae elit libero</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='container-image'>
        <img
          className="image"
          src={ImageTwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='description-box'>
            <h3>Second  label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='container-image'>
        <img
          className="image"
          src={ImageThree}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='description-box'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
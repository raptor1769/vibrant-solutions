import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../assets/images/car1.jpg'
import car2 from '../../assets/images/car2.jpg'
import car3 from '../../assets/images/car3.jpg'
import car4 from '../../assets/images/car4.jpg'
import car5 from '../../assets/images/car5.jpg'
import car6 from '../../assets/images/car6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../carousel/SlideShow.css'


function SlideShow() {
  return (
    <Carousel className='carousel mt-2'>
      <Carousel.Item>
        <img
          src={car1}
          alt="First slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption className='caption'>
          <h1>First slide label</h1>
          <p className='ml-7'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={car2}
          alt="Second slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p className='ml-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={car3}
          alt="Third slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p className='ml-7'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={car4}
          alt="Fourth slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption>
          <h1>Fourth slide label</h1>
          <p className='ml-7'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={car5}
          alt="Fifth slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption>
          <h1>Fifth slide label</h1>
          <p className='ml-7'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={car6}
          alt="Sixth slide"
          className='carousel-item d-block w-100'
        />
        <Carousel.Caption>
          <h1>Sixth slide label</h1>
          <p className='ml-7'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;

import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../assets/images/car1.jpg';
import car2 from '../../assets/images/car2.jpg';
import car3 from '../../assets/images/car3.jpg';
import car5 from '../../assets/images/car5.jpg';
import car6 from '../../assets/images/car6.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../carousel/SlideShow.css';

function SlideShow() {
  return (
    <Carousel className="carousel mt-2" controls={false}>
      <Carousel.Item className="carousel-opacity">
        <img src={car1} alt="First slide" className="carousel-item d-block w-100" />
        <Carousel.Caption className="caption">
          <h1>Desktops and Laptops</h1>
          <p className="ml-7">Empowering Your Digital Journey: Where Innovation Meets Reliability.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-opacity">
        <img src={car2} alt="Second slide" className="carousel-item d-block w-100" />
        <Carousel.Caption className="caption">
          <h1>Servers</h1>
          <p className="ml-7">Robust, Scalable, and Secure: Your Ultimate Server Solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-opacity">
        <img src={car3} alt="Third slide" className="carousel-item d-block w-100" />
        <Carousel.Caption className="caption">
          <h1>Networking</h1>
          <p className="ml-7">Connecting Computers Globally: Harnessing the Power of the Internet.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-opacity">
        <img src={car5} alt="Fifth slide" className="carousel-item d-block w-100" />
        <Carousel.Caption className="caption">
          <h1>Security</h1>
          <p className="ml-7">Protecting Your Data: Simple, Strong Computer Security.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-opacity">
        <img src={car6} alt="Sixth slide" className="carousel-item d-block w-100" />
        <Carousel.Caption className="caption">
          <h1>Printers</h1>
          <p className="ml-7">Efficient and Reliable: Your Office Printing Solution.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;

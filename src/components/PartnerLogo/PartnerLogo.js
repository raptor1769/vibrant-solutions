import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import plogo1 from '../../assets/images/plogo1.png';
import plogo2 from '../../assets/images/plogo2.png';
import plogo3 from '../../assets/images/plogo3.jpg';
import plogo4 from '../../assets/images/plogo4.jpg';
import plogo5 from '../../assets/images/plogo5.jpg';
import plogo6 from '../../assets/images/plogo6.png';
import plogo7 from '../../assets/images/plogo7.png';
import plogo8 from '../../assets/images/plogo8.png';
import plogo9 from '../../assets/images/plogo9.png';
import plogo10 from '../../assets/images/plogo10.png';
import plogo11 from '../../assets/images/plogo11.png';
import plogo12 from '../../assets/images/plogo12.png';

import '../PartnerLogo/PartnerLogo.css';

function PartnerLogo() {
  return (
    <>
      <div>
        <h1>Our Partners</h1>
      </div>
      <Carousel className="logo-carousel" indicators={false}>
        <Carousel.Item className="logo-carousel-item">
          <div className="logo-container">
            <img className="d-block logo-carousel-img" src={plogo1} alt="Company Logo 1" />
            <img className="d-block logo-carousel-img" src={plogo2} alt="Company Logo 2" />
            <img className="d-block logo-carousel-img" src={plogo3} alt="Company Logo 3" />
            <img className="d-block logo-carousel-img" src={plogo4} alt="Company Logo 4" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="logo-carousel-item">
          <div className="logo-container">
            <img className="d-block logo-carousel-img" src={plogo5} alt="Company Logo 5" />
            <img className="d-block logo-carousel-img" src={plogo6} alt="Company Logo 6" />
            <img className="d-block logo-carousel-img" src={plogo7} alt="Company Logo 7" />
            <img className="d-block logo-carousel-img" src={plogo8} alt="Company Logo 8" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="logo-carousel-item">
          <div className="logo-container">
            <img className="d-block logo-carousel-img" src={plogo9} alt="Company Logo 9" />
            <img className="d-block logo-carousel-img" src={plogo10} alt="Company Logo 10" />
            <img className="d-block logo-carousel-img" src={plogo11} alt="Company Logo 11" />
            <img className="d-block logo-carousel-img" src={plogo12} alt="Company Logo 12" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default PartnerLogo;

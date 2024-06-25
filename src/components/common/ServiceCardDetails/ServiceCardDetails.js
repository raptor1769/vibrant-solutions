import './ServiceCardDetails.css';
import Cube1 from '../../../assets/images/Cube4.png';
import Cube2 from '../../../assets/images/Cube8.png';
import amc from '../../../assets/images/AMC.jpg';
import biometric from '../../../assets/images/biometric.jpg';
import cctv from '../../../assets/images/cctv.jpg';
import network from '../../../assets/images/server.jpg';
import cable from '../../../assets/images/network.jpg';
import { Link } from 'react-router-dom';

const ServiceCardDetails = ({ title, type, description, Installation, Extras, getInTouch, services }) => {
  const renderPic =() =>{
    switch (title){
      case 'AMC':
        return <img src={amc} className='product-img-resize'/>
      case 'BIOMETRIC':
        return <img src={biometric} className='product-img-resize'/>
      case 'CCTV Service and Installation' :
        return <img src={cctv} className='product-img-resize'/>
      case 'Structured Cabling' :
        return <img src={cable} className='product-img-resize'/>
      case 'Network Storage and Backup Solutions' :
        return <img src={network} className='product-img-resize'/>
      default:
        return <img src={''} className='product-img-resize'/>
    }
  }
  return (
    <div className={`card-container ${type}-card`}>
      <div className="details">
        <div className="card-image">
          {
            renderPic()
          }
        </div>
        <div className="heading-title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {Installation && (
          <div className="heading-title">
            <h3>Installation</h3>
            <p>{Installation}</p>
          </div>
        )}
        {services && (
          <div className="heading-title">
            <h3 className="large-text">Services</h3>
            {services?.map((item, key) => {
              return (
                <div key={key}>
                  <p>
                    <b>
                      <h3>{item.name}</h3>
                    </b>

                    <p className="text-p-description">{item.desc}</p>
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {Extras && (
          <div className="heading-title">
            <h3 className="large-text">Why Choose Us</h3>
            {Extras?.map((item, key) => {
              return (
                <div key={key}>
                  <p>
                    <b>
                      <h3>{item.name}</h3>
                    </b>

                    <p className="text-p-description">{item.desc}</p>
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div className="heading-title">
          <h3>Get In Touch With Us</h3>
          <p>{getInTouch}</p>
        </div>
        <div className="card-button">
          <Link to={`/`} className="Links">
            <button>Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;

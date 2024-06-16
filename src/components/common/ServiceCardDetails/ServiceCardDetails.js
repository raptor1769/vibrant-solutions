import './ServiceCardDetails.css';
import Cube1 from '../../../assets/images/Cube4.png';
import Cube2 from '../../../assets/images/Cube8.png';
import { Link } from 'react-router-dom';

const ServiceCardDetails = ({ title, type, description, Installation, Extras, getInTouch, services, img }) => {
  return (
    <div className={`card-container ${type}-card`}>
      <div className="details">
        <div className="card-image">
          <img className="product-img-resize" src={img} />
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

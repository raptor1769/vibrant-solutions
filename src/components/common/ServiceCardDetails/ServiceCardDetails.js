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
          <h1>{title}</h1>
          <p>{description}</p>
          {Installation && (
            <div className="heading-title">
              <h1>Installation</h1>
              <p>{Installation}</p>
            </div>
          )}
          {services && (
            <div className="heading-title">
              <h1 className="large-text">Services</h1>
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
              <h1 className="large-text">Why Choose Us</h1>
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
            <h1>Get In Touch With Us</h1>
            <p>{getInTouch}</p>
          </div>
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

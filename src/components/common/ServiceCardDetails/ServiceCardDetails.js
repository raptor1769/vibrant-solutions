import './ServiceCardDetails.css';
import Cube1 from '../../../assets/images/Cube4.png';
import Cube2 from '../../../assets/images/Cube8.png';
import { Link } from 'react-router-dom';

const ServiceCardDetails = ({ title, type, description, Installation, Extras, getInTouch, services, img }) => {
  return (
    <div className={`card-container ${type}-card`}>
      <div className="preview-mesh">
        {/* <img className="mesh-bg" src={BgImg} alt="bg-mesh" /> */}
        <img className="card-detail-mesh-cube-1" src={Cube1} alt="bg-mesh" />
        {/* <img className="mesh-cube-2 preview-images" src={Cube1} alt="bg-mesh" /> */}
        <img className="card-detail-mesh-cube-3" src={Cube2} alt="bg-mesh" />
      </div>
      <div className="details">
        <div className="card-image">
          <img className="product-img-resize" src={img} />
        </div>
        <div className="heading-title">
          <h1>{title}</h1>
          <p>{description}</p>
          {/* <img src="" alt="image"/> */}

          {/* <div className="heading-title">
            <h1>Series</h1>
            {series.map((item, key) => {
              return (
                <div key={key}>
                  <p>
                    <b>
                      <h3>{item.name}</h3>
                    </b>
                    <p className="text-d-p-description">
                      <b>{item.desc[0].title}</b>
                      {item.desc[0].desc}
                    </p>
                  </p>
                </div>
              );
            })}
          </div> */}
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

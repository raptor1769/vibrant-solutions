import './CardDetail.css';
import Cube1 from '../../../assets/images/Cube4.png';
import Cube2 from '../../../assets/images/Cube8.png';
import { Link } from 'react-router-dom';

const CardDetail = ({ title, type, description, series, KeyFeatures, CustomizationOptions, Extras, Future, img }) => {
  return (
    <div className={`card-container ${type}-card`}>
      <div className="details">
        <div className="card-image">
          <img className="product-img-resize" src={img} />
        </div>
        <div className="heading-title">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="heading-title bg-color">
            <h1>Key Features</h1>
            {KeyFeatures?.map((item, key) => {
              return (
                <div key={key}>
                  <p>
                    <b>
                      <h3>{item.name}</h3>
                    </b>

                    <p className="text-d-p-description">{item.desc}</p>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="heading-title">
            <h1 className="large-text">Customization Options</h1>
            <p>{CustomizationOptions}</p>
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
          <div className="heading-title">
            {Future?.map((item, key) => {
              return (
                <div key={key}>
                  <h1 className="larger-text">{item.name}</h1>

                  <p>{item.desc}</p>
                </div>
              );
            })}
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

export default CardDetail;

import './CardDetail.css';
import Cube1 from '../../../assets/images/Cube4.png';
import Cube2 from '../../../assets/images/Cube8.png';
import { Link } from 'react-router-dom';
import amc from '../../../assets/images/Laptop repair 1.jpg';
import biometric from '../../../assets/images/Desktop AMC.jpg';
import cctv from '../../../assets/images/networking1.jpg';
import network from '../../../assets/images/Network printer.jpg';
import cable from '../../../assets/images/Server repair.jpg';
import cloud from '../../../assets/images/IT Services.jpg';

const CardDetail = ({ title, type, description, series, KeyFeatures, CustomizationOptions, Extras, Future }) => {
  const renderPic =() =>{
    switch (title){
      case 'Laptops':
        return <img src={amc} className='product-img-resize'/>
      case 'Desktop':
        return <img src={biometric} className='product-img-resize'/>
      case 'Networking Devices' :
        return <img src={cctv} className='product-img-resize'/>
      case 'Servers' :
        return <img src={cable} className='product-img-resize'/>
      case 'Printers & Scanners' :
         return <img src={network} className='product-img-resize'/>
      case 'Cloud Services' :
        return <img src={cloud} className='product-img-resize'/>  
      default:
        return <img src={''} className='product-img-resize'/>
    }
  }
  return (
    <div className={`card-container ${type}-card`}>
      <div className="details">
        <div className="card-image">{
          renderPic()
          }
        </div>
        <div className="heading-title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="heading-title bg-color">
          <h3>Key Features</h3>
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
          <h3 className="large-text">Customization Options</h3>
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
                <h3 className="larger-text">{item.name}</h3>

                <p>{item.desc}</p>
              </div>
            );
          })}
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

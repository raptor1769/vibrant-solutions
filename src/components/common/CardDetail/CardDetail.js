import "./CardDetail.css"
import Cube1 from "../../../assets/images/Cube4.png"
import Cube2 from "../../../assets/images/Cube8.png";
import { Link } from "react-router-dom";

const CardDetail = ({ title,type, description, series, KeyFeatures,CustomizationOptions,Extras,Future }) => {

  return (
    <div className={`card-container ${type}-card`}>
            <div className="preview-mesh">
        {/* <img className="mesh-bg" src={BgImg} alt="bg-mesh" /> */}
        <img className="card-detail-mesh-cube-1" src={Cube1} alt="bg-mesh" />
        {/* <img className="mesh-cube-2 preview-images" src={Cube1} alt="bg-mesh" /> */}
        <img className="card-detail-mesh-cube-3" src={Cube2} alt="bg-mesh" />
      </div>
      <div className="details">
        <div>
          <img
            className="img-resize"
            src="https://media.wired.com/photos/5fd28eff5310f0846594ca81/master/w_1920%2Cc_limit/Gear-Lenovo-Ideapad-Flex-5.jpg"
          />
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
          <div className="heading-title">
            <h1>Key Features</h1>
            {KeyFeatures.map((item, key) => {
              return (
                <div key={key}>
                  <p >
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
            {Extras.map((item, key) => {
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
          {Future.map((item, key) => {
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

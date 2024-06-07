import "./ServiceAndTech.css";
import servicesData from "../../assets/staticData/services.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../common/Card/Card";
import cube from "../../assets/images/Cube4.png"
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ServiceAndTech = forwardRef((props, ref) => {
  return (
    <div className="service-component" ref={ref}>
      <div className="service-header">
        <div className="service-header__title">Services & Technologies</div>
        <div className="service-header__sub-title">
        <p>
          We provide innovative, scalable solutions leveraging cutting-edge technologies such as artificial intelligence, cloud computing, and IoT.</p>
          <div className="ml-3">This will optimize business processes and drive digital transformation.
          </div>
        </div>
      </div>
      <div className="services-container">
        {servicesData.map((item) => (
          <Link key={item.id} to={`/services/${item.id}`} className="Links">
          <Card
            type="services"
            key={item.id}
            desc={item.desc}
            title={item.title}
            img={item.img}
            color={item.color}
          />
          </Link>
        ))}
      </div>
      <div className="services-footer">
        <div className="services-footer__cube">
            <img src={cube} alt='cube' />
        </div>
        <div className="services-footer__text">
          Our goal is to give everyone the opportunity to take advantage of the
          most cutting-edge technology on the market.
        </div>
      </div>
    </div>
  );
});

export default ServiceAndTech;

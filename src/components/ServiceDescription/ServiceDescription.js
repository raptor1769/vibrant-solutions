import { Navigate, useParams } from 'react-router-dom';
import serviceDescription from '../../assets/staticData/serviceDetails.json';
import './ServiceDescription.css';
import { forwardRef } from 'react';
import ServiceCardDetails from '../common/ServiceCardDetails/ServiceCardDetails';

const ServiceDescription = forwardRef(() => {
  const { serivceId } = useParams();
  const service = serviceDescription.find((service) => service.id === parseInt(serivceId, 10));

  return service ? (
    <ServiceCardDetails
      title={service.name}
      img={service.img}
      description={service.description}
      Installation={service.Installation}
      services={service.services}
      // CustomizationOptions={service.CustomizationOptions}
      Extras={service.Extras}
      getInTouch={service.GetInTouch}
      // color={""}
      // Future={service.Future}
    />
  ) : (
    <Navigate to="/" />
  );
});

export default ServiceDescription;

import { Navigate, useParams } from 'react-router-dom';
import productsDesciption from '../../assets/staticData/productDetails.json';
import './ProjectDescription.css';
import { forwardRef } from 'react';
import CardDetail from '../common/CardDetail/CardDetail';

const ProjectDescription = forwardRef(() => {
  const { productId } = useParams();
  const product = productsDesciption.find((product) => product.id === parseInt(productId, 10));

  return product ? (
    <CardDetail
      title={product.name}
      img={product.img}
      description={product.description}
      series={product.series}
      KeyFeatures={product.KeyFeatures}
      CustomizationOptions={product.CustomizationOptions}
      Extras={product.Extras}
      color={''}
      Future={product.Future}
    />
  ) : (
    <Navigate to="/" />
  );
});

export default ProjectDescription;

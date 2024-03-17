import { useParams } from "react-router-dom";
import productsDesciption from "../../assets/staticData/productDetails.json";
import "./ProjectDescription.css" ;
import { forwardRef } from "react";
import CardDetail from "../common/CardDetail/CardDetail";
// Define the products array outside of the component

const ProjectDescription = forwardRef((props, ref) => {
  const { productId } = useParams();
  // Find the product with the matching ID
  const product = productsDesciption.find(
    (product) => product.id === parseInt(productId, 10)
  );
  return (
      <CardDetail 
        title={product.name}
        description={product.description}
        series={product.series}
        KeyFeatures={product.KeyFeatures}
        CustomizationOptions={product.CustomizationOptions}
        Extras={product.Extras}
        color={""}
        Future={product.Future}
      />
      
  );
});

export default ProjectDescription;

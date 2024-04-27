import { useRef } from "react";
import Preview from "../components/Preview/Preview";
import ServiceAndTech from "../components/ServicesAndTechs/ServiceAndTech";
import Products from "../components/Products/Products";

const Home = ({servicesRef, productsRef}) => {

	return (
		<>
			<Preview />
			<ServiceAndTech ref={servicesRef} />
      <Products ref={productsRef} />
		</>
	);
};

export default Home;

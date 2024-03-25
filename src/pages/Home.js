import { useRef } from "react";
import Preview from "../components/Preview/Preview";
import ServiceAndTech from "../components/ServicesAndTechs/ServiceAndTech";
import Products from "../components/Products/Products";

const Home = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const headerRef = useRef(null);
  const ProjectDescriptionRef = useRef(null);

	return (
		<>
			<Preview ref={headerRef} />
			<ServiceAndTech ref={servicesRef} />
      <Products ref={productsRef} ProjectDescriptionRef={ProjectDescriptionRef}/>
		</>
	);
};

export default Home;

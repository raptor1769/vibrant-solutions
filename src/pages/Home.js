import { useRef } from "react";
import Preview from "../components/Preview/Preview";
import ServiceAndTech from "../components/ServicesAndTechs/ServiceAndTech";
import Products from "../components/Products/Products";
import SlideShow from "../components/carousel/SlideShow";
import PartnerLogo from "../components/PartnerLogo/PartnerLogo";
import WhatsAppButton from "../components/WhatsappButton/WhatsappButton";

const Home = ({servicesRef, productsRef}) => {

	return (
		<>
			<SlideShow />
			<Preview />
			<ServiceAndTech ref={servicesRef} />
      <Products ref={productsRef} />
	  <PartnerLogo/>
		<WhatsAppButton/>
		</>
	);
};

export default Home;

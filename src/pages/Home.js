import { useRef } from 'react';
import Preview from '../components/Preview/Preview';
import ServiceAndTech from '../components/ServicesAndTechs/ServiceAndTech';
import Products from '../components/Products/Products';
import SlideShow from '../components/carousel/SlideShow';
import PartnerLogo from '../components/PartnerLogo/PartnerLogo';
import WhatsAppButton from '../components/WhatsappButton/WhatsappButton';
import { AboutUs } from '../components/aboutUs/AboutUs';

const Home = ({ servicesRef, productsRef, aboutUsRef }) => {
  return (
    <>
      <SlideShow />
      {/* <Preview /> */}
      <ServiceAndTech ref={servicesRef} />
      <Products ref={productsRef} />
      <PartnerLogo />
      <AboutUs ref={aboutUsRef} />
      <WhatsAppButton />
    </>
  );
};

export default Home;

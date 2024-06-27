import { forwardRef } from 'react';

import Laptop from '../../assets/images/Laptop.svg';
import Cube1 from '../../assets/images/Cube4.png';
import Cube2 from '../../assets/images/Cube8.png';
import './aboutUs.css';
import CardDetail from '../common/CardDetail/CardDetail';

export const AboutUs = forwardRef((props, ref) => {
  const data = 'Vibrant IT Solutions is a dynamic and forward-thinking IT service company. Established in 2023 we have consistently delivered high-quality IT Solutions to our clients, earning us a reputation for reliability and excellence.';
  const mission = 'At Vibrant IT Solutions, our mission is to empower businesses through strategic and innovative IT solutions. We are dedicated to delivering unparalleled consulting services, leveraging cutting-edge technology to drive efficiency, enhance security, and foster growth. We strive to understand the unique challenges of each client, offering strategic insights, expert advice, and seamless implementation to optimize their IT infrastructure. '
  const vision = 'Our vision is to be the leading provider of IT Rentals and Sales, redefining the way businesses harness the power of technology to propel their success.'
  return (
    <>
      <div>
      <CardDetail
      title={"About Us"}
      header ={"About US"}
      img={''}
      mission={mission}
      vision={vision}
      description={data}
      series={''}
      KeyFeatures={''}
      CustomizationOptions={''}
      Extras={''}
      color={''}
      Future={''}
    />
      </div>
    </>
  );
});

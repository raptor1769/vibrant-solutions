import { forwardRef } from 'react';

import Laptop from '../../assets/images/Laptop.svg';
import Cube1 from '../../assets/images/Cube4.png';
import Cube2 from '../../assets/images/Cube8.png';
import './aboutUs.css';

export const AboutUs = forwardRef((props, ref) => {
  return (
    <>
      <div className="services-footer">
        <div className="preview-mesh">
          <img className="mesh-bg" src={Laptop} alt="bg-mesh" />
          <img className="mesh-cube-1 preview-images" src={Cube1} alt="bg-mesh" />
          <img className="mesh-cube-2 preview-images" src={Cube1} alt="bg-mesh" />
          <img className="mesh-cube-3 preview-images" src={Cube2} alt="bg-mesh" />
        </div>
        <div className="about-us-container" ref={ref}>
          <h1>About Vibrant Solutions</h1>
          <p>
          Vibrant IT Solutions is a dynamic and forward-thinking IT service company. Established in 2023 we have consistently delivered high-quality IT Solutions to our clients, earning us a reputation for reliability and excellence.
          </p>
          <div className="about-us-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses through state-of-the-art technology solutions, helping them achieve
              their goals and thrive in a competitive market. We believe in building long-term partnerships based on
              trust, integrity, and excellence.
            </p>
          </div>
          {/* <div className="about-us-section">
            <h2>Our Values</h2>
            <ul>
              <li>
                <b>Innovation:</b> Continuously evolving to bring cutting-edge solutions.
              </li>
              <li>
                <b>Integrity:</b> Upholding the highest standards of honesty and fairness.
              </li>
              <li>
                <b>Customer Focus:</b> Putting our clients at the heart of everything we do.
              </li>
              <li>
                <b>Excellence:</b> Striving for perfection in every project we undertake.
              </li>
            </ul>
          </div> */}
          {/* <div className="about-us-section">
            <h2>Our Team</h2>
            <p>
              Our team comprises seasoned professionals with diverse backgrounds and expertise. We are passionate about
              technology and committed to delivering exceptional service to our clients.
            </p>
          </div> */}
          <div className="about-us-section">
            <h2>Our Vision</h2>
            <p>
            Our vision is to be the leading provider of IT Rentals and Sales, redefining the way businesses harness the power of technology to propel their success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

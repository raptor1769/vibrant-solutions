import './Footer.css';
import Logo from '../../assets/images/logo.png';
import ScrollTo from '../common/ScrollTo/ScrollTo';

import Facebook from '../../assets/svgs/Facebook';
import Instagram from '../../assets/svgs/Instagram';
import Linkedin from '../../assets/svgs/Linkedin';
import Pinterest from '../../assets/svgs/Pinterest';
import Twitter from '../../assets/svgs/Twitter';
import Youtube from '../../assets/svgs/Youtube';
import Phone from '../../assets/svgs/Phone';
import Email from '../../assets/svgs/Email';
import servicesData from '../../assets/staticData/services.json';
import products from '../../assets/staticData/products.json';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = ({ servicesRef, productsRef, aboutUsRef }) => {
  const handleClick = (e) => {
    if (e === 'youtube') window.location.href = 'https://www.youtube.com/channel/UC_vTbkS9h7aPrPpItHggQew';
    else if (e === 'instagram') window.location.href = 'https://www.instagram.com/its_vits2024/';
    else if (e === 'linkedIn') window.location.href = 'https://www.linkedin.com/company/its-vits/';
  };
  const { pathname } = useLocation();
  const [dropdownOpenServices, setDropdownOpen] = useState(false);
  const [dropdownOpenProducts, setDropdownOpenProducts] = useState(false);

  const toggleDropdownServices = () => {
    setDropdownOpen(!dropdownOpenServices);
  };

  const closeDropdownServices = () => {
    setDropdownOpen(false);
  };
  const toggleDropdownProducts = () => {
    setDropdownOpenProducts(!dropdownOpenProducts);
  };

  const closeDropdownProducts = () => {
    setDropdownOpenProducts(false);
  };
  return (
    <>
      <div className="ain-footer">
        <div className="ain-footer-location">
          <div className="ain-footer-location__map">
            <iframe
              title="Location"
              className="map_frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.457107160586!2d78.45995309999999!3d17.3898375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97eaa5e0193f%3A0xb9f957f5ece16eb0!2sHyder%20Hussain%20Manzil!5e0!3m2!1sen!2sin!4v1710224492804!5m2!1sen!2sin"
              style={{ border: '0' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="locations_frame"
            />
          </div>
          <div className="footer-contact-section">
            <div className="get-in-touch">Get in Touch!</div>
            <div className="contact-info">
              <div className="bootstrap-icon">
                <Phone width="18" height="18" />
              </div>
              <div className="bootstrap-content">+91-8919090172</div>
            </div>
            <div className="contact-info">
              <div className="bootstrap-icon">
                <Email width="18" height="18" />
              </div>
              <div
                className="bootstrap-content email-link"
                onClick={() => window.open(`mailto: info@vibrantitsolutions.in`, '_blank')}
              >
                info@vibrantitsolutions.in
              </div>
            </div>
          </div>
        </div>
        <div className="social-media-wrapper">
          <div className="social-media-section">
            <div className="social-media-icon">
              <Facebook width="32" height="32" className="facebook" />
            </div>
            <div className="social-media-icon">
              <Twitter width="32" height="32" className="twitter" />
            </div>
            <div className="social-media-icon">
              <Linkedin width="32" height="32" className="linkedin clickable" onClick={() => handleClick('linkedIn')} />
            </div>
            <div className="social-media-icon">
              <Youtube width="32" height="32" className="youtube clickable" onClick={() => handleClick('youtube')} />
            </div>
            <div className="social-media-icon">
              <Pinterest width="32" height="32" className="pinterest" />
            </div>
            <div className="social-media-icon">
              <Instagram
                width="32"
                height="32"
                className="instagram clickable"
                onClick={() => handleClick('instagram')}
              />
            </div>
          </div>
        </div>
        <div className="ain-footer-links">
          <div className="ain-footer-links-logo">
            <img src={Logo} alt="company logo" className="logo-footer" />
          </div>
          <div className="ain-footer-links-redirects">
            
          <div className="nav-item dropdown">
          <Link className="nav-item" to="/">
            <span>Home</span>
          </Link>
          </div>
          <div className="nav-item dropdown">
              <Link
                      className="nav-item"
                      to={`/aboutUs`}
                    >
                      <span>About Us</span>
                    </Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

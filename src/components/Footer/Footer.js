import "./Footer.css";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/envelope.svg";
import Logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/fb.png";
import twitter from "../../assets/images/x.png";
import linkedin from "../../assets/images/linkedin.jpg";
import youtube from "../../assets/images/youtube.png";
import pinterest from "../../assets/images/pinterest.png";
import instagram from "../../assets/images/instagram.jpg";
import ScrollTo from "../common/ScrollTo/ScrollTo";
const Footer = ({ servicesRef, productsRef }) => {
  return (
    <>
      <div className="ain-footer">
        <div className="ain-footer-location">
          <div className="ain-footer-location__map">
            <iframe
              title="Location"
              className="map_frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.457107160586!2d78.45995309999999!3d17.3898375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97eaa5e0193f%3A0xb9f957f5ece16eb0!2sHyder%20Hussain%20Manzil!5e0!3m2!1sen!2sin!4v1710224492804!5m2!1sen!2sin" 
              style={{"border":"0"}} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="locations_frame"
            />
          </div>
          <div className="footer-contact-section">
            <div className="get-in-touch">Get in Touch!</div>
            <div className="contact-info">
              <div className="bootstrap-icon"><img alt="phone-img" src={phone}></img></div>
              <div className="bootstrap-content">+91-8919090172</div>
            </div>
            <div className="contact-info">
              <div className="bootstrap-icon"><img alt="email-img" src={email}></img></div>
              <div 
                className="bootstrap-content email-link"
                onClick={() => window.open(`mailto: info@vibrantitsolutions.in`, "_blank")}>
                  info@vibrantitsolutions.in
                </div>
            </div>
          </div>
        </div>
        <div className="social-media-section">
          <div className="social-media-icon">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <img src={pinterest} alt="Pinterest" />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="ain-footer-links">
          <div className="ain-footer-links-logo">
            <img src={Logo} alt="logo" className="logo-footer"/>
          </div>

          <div className="ain-footer-links-redirects">
            <ScrollTo ref={servicesRef}>Services</ScrollTo>
            <ScrollTo ref={productsRef}>Products</ScrollTo>
            {/* <span>About Us</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

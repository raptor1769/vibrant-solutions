import "./Footer.css";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/envelope.svg";
import Logo from "../../assets/images/logo.png";
import ScrollTo from "../common/ScrollTo/ScrollTo";
const Footer = ({ servicesRef, productsRef,headerRef }) => {
  return (
    <>
      {/* <div className="footer">
       <div className="footer-container">
         <div className="footer-top">
           <div className="footer-top__left">LOGO</div>
           <div className="footer-top__right">
             <div className="footer__address">
               2455, Old begumpet Road, Some area, Secunderabad, Hyderabad,
               Telangana, India
             </div>
             <div className="footer__email">somesolutions@somedomain.com</div>
             <div className="footer__phone">+91-1234567890</div>
           </div>
         </div>
         <div className="footer-bottom">
           <div className="footer-bottom__left">
             <div className="footer_social">
               <img src="../assets/images/twitter.png" alt="twitter" />
               <img src="../assets/images/facebook.png" alt="facebook" />
               <img src="../assets/images/instagram.png" alt="instagram" />
             </div>
           </div>
           <div className="footer-bottom__right">
             <div className="footer__copyright">
               Copyright ©2022 Vibrant Solutions
             </div>
           </div>
         </div>
       </div>
     </div> */}
      <div className="ain-footer">
        <div className="ain-footer-location-text">
          <h1>Get in Touch!</h1>
        </div>
        <div className="ain-footer-location">
          <div className="ain-footer-location__map">
          <iframe
          className="map_frame"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.457107160586!2d78.45995309999999!3d17.3898375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97eaa5e0193f%3A0xb9f957f5ece16eb0!2sHyder%20Hussain%20Manzil!5e0!3m2!1sen!2sin!4v1710224492804!5m2!1sen!2sin" 
           style={{"border":"0"}} allowfullscreen="" loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="footer-contact-section">
            <div>
              {/* <img src={footerImg} /> */}
            </div>
            <div className="contact-info">
              <div className="bootstrap-icon"><img src={phone}></img></div>
              <div className="bootstrap-content">+91-1234567890</div>
            </div>
            <div className="contact-info">
              <div className="bootstrap-icon"><img src={email}></img></div>
              <div className="bootstrap-content">demo@aintech.com</div>
            </div>
            <div className="contact-info">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="ain-footer-links">
          <div className="ain-footer-links-logo">
          <img src={Logo} alt="logo" className="logo-footer"/>
          </div>

          <div className="ain-footer-links-redirects">
            <ScrollTo ref={servicesRef}>Services</ScrollTo>
            <ScrollTo ref={productsRef}>Products</ScrollTo>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

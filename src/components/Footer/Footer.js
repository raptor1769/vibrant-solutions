import "./Footer.css";
import footerImg from "../../assets/images/Frame 5.png"

const Footer = () => {
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
        <div className="ain-footer-location">
          <div className="ain-footer-location__map">
            <div className="ain-footer-location-text">
              <h3>Get in Touch!</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.2005506955566!2d78.48908013469449!3d17.44050606294828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b65be6d70f9%3A0x8ddfb841043ccd53!2sAiN%20Computers!5e0!3m2!1sen!2sin!4v1709966387337!5m2!1sen!2sin"
              className="iframe-map"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer-contact-section">
            <div>
              {/* <img src={footerImg} /> */}
            </div>
            <div className="contact-info">
              <div></div>
              <div>+91-1234567890</div>
            </div>
            <div className="contact-info">
              <div></div>
              <div>demo@aintech.com</div>
            </div>
            <div className="contact-info">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="ain-footer-links">
          <div className="ain-footer-links-logo">
            {/* <img src="logo.png" alt="Place the logo here" /> */}
          </div>

          <div className="ain-footer-links-redirects">
            <span>Company</span>
            <span>Product</span>
            <span>Support</span>
            <span>Office</span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;

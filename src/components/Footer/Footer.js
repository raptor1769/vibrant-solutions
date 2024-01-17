import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
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
    </div>
  );
};

export default Footer;

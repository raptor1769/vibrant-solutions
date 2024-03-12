import ScrollTo from "../common/ScrollTo/ScrollTo";
import "./Header.css";
import Logo from "../../assets/images/logo.png"

const Header = ({ servicesRef, productsRef }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo"/>
      </div>
      <div className="nav-container">
        <ScrollTo ref={servicesRef}>Services</ScrollTo>
        <ScrollTo ref={productsRef}>Products</ScrollTo>
        {/* <div className="nav-item">About Us</div> */}
      </div>
      {/* <div className="button-container">
            <div className="call-button">Book a Call</div>
        </div> */}
    </div>
  );
};

export default Header;

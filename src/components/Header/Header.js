import ScrollTo from '../common/ScrollTo/ScrollTo';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ servicesRef, productsRef, aboutUsRef }) => {
  const { pathname } = useLocation();

  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="nav-container">
        {pathname === '/' ? (
          <>
            <ScrollTo ref={servicesRef}>Services</ScrollTo>
            <ScrollTo ref={productsRef}>Products</ScrollTo>
          </>
        ) : (
          <Link className="nav-item" to="/">
            Home
          </Link>
        )}
        {/* <ScrollTo ref={aboutUsRef}>About US</ScrollTo> */}
      </div>
    </div>
  );
};

export default Header;

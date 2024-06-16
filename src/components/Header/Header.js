import ScrollTo from '../common/ScrollTo/ScrollTo';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import servicesData from '../../assets/staticData/services.json';
import products from '../../assets/staticData/products.json';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ servicesRef, productsRef, aboutUsRef }) => {
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
    <div className="header-container">
      <div className="header-logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="nav-container">
        {pathname === '/' ? (
          <>
            {/* <div className="nav-item dropdown">About Us</div> */}
            <div
              className="nav-item dropdown"
              onMouseEnter={toggleDropdownServices}
              onMouseLeave={closeDropdownServices}
            >
              <span>Services</span>

              <div className="dropdown-menu">
                {dropdownOpenServices &&
                  servicesData.map((item) => (
                    <Link
                      key={item.id}
                      className="dropdown-item Links"
                      to={`/services/${item.id}`}
                      onClick={closeDropdownServices}
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
            <div
              className="nav-item dropdown"
              onMouseEnter={toggleDropdownProducts}
              onMouseLeave={closeDropdownProducts}
            >
              <span>Products</span>
              <div className="dropdown-menu">
                {dropdownOpenProducts &&
                  products.map((item) => (
                    <Link
                      key={item.id}
                      className="dropdown-item Links"
                      to={`/products/${item.id}`}
                      onClick={closeDropdownProducts}
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
            {/* <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/services/service1" onClick={closeDropdown}>
                    Service 1
                  </Link>
                  <Link className="dropdown-item" to="/services/service2" onClick={closeDropdown}>
                    Service 2
                  </Link>
                  <Link className="dropdown-item" to="/services/service3" onClick={closeDropdown}>
                    Service 3
                  </Link>
                </div> */}
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

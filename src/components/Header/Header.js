import ScrollTo from '../common/ScrollTo/ScrollTo';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import { Route, Router, Routes, Navigate } from 'react-router-dom';
import { AboutUs } from '../aboutUs/AboutUs';

const Header = ({ servicesRef, productsRef, aboutUsRef }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="nav-container">
        <ScrollTo ref={servicesRef}>Services</ScrollTo>
        <ScrollTo ref={productsRef}>Products</ScrollTo>
        <ScrollTo ref={aboutUsRef}>About US</ScrollTo>
      </div>
    </div>
  );
};

export default Header;

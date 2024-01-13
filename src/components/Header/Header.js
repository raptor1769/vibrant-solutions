import "./Header.css"
// import Logo from "../../assets/images/Logo.svg"

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo-container">
            {/* <img src={Logo} alt="logo" /> */}
            LOGO
        </div>
        <div className="nav-container">
            <div className="nav-item">Services</div>
            <div className="nav-item">Products</div>
            <div className="nav-item">About Us</div>
        </div>
        <div className="button-container">
            <div className="call-button">Book a Call</div>
        </div>
    </div>
  )
}

export default Header
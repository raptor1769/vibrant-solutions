import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
import Products from "./components/Products/Products";
import ServiceAndTech from "./components/ServicesAndTechs/ServiceAndTech";

const App = () => {
  const servicesRef = useRef(null)
  const productsRef = useRef(null)
  const headerRef = useRef(null)
  return <div className="App">
    <Header servicesRef={servicesRef} productsRef={productsRef} />
    <Preview ref={headerRef}/>
    <ServiceAndTech ref={servicesRef} />
    <Products ref={productsRef} />
    <Footer servicesRef={servicesRef} productsRef={productsRef}  headerRef={headerRef}/>
  </div>;
}

export default App;

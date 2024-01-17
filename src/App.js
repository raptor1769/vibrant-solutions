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
  return <div className="App">
    <Header servicesRef={servicesRef} productsRef={productsRef} />
    <Preview />
    <ServiceAndTech ref={servicesRef} />
    <Products ref={productsRef} />
    <Footer />
  </div>;
}

export default App;

// App.js
import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
import Products from "./components/Products/Products";
import ServiceAndTech from "./components/ServicesAndTechs/ServiceAndTech";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDescription from "./components/ProductDescription/ProjectDescription";

const App = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const headerRef = useRef(null);
  const ProjectDescriptionRef = useRef(null);
  return (
    <div className="App">
      <Router>
        <Header servicesRef={servicesRef} productsRef={productsRef} />
        <Preview ref={headerRef}/>
        <ServiceAndTech ref={servicesRef} />
        <Routes>
          <Route path="/" element={<Products ref={productsRef} ProjectDescriptionRef={ProjectDescriptionRef}/>} />
          <Route path="/products/:productId" element={<ProjectDescription ref={ProjectDescriptionRef}/>} />
          <Route path="/vibrant-solutions" element={<Products ref={productsRef} ProjectDescriptionRef={ProjectDescriptionRef}/>} />
        </Routes>

        <Footer servicesRef={servicesRef} productsRef={productsRef}  headerRef={headerRef}/>
      </Router>
    </div>
  );
}

export default App;

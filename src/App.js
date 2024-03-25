import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectDescription from "./components/ProductDescription/ProjectDescription";
import Home from "./pages/Home";
import CardDetail from "./components/common/CardDetail/CardDetail";
import productsDesciption from "../src/assets/staticData/productDetails.json";

const App = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const headerRef = useRef(null);
  const ProjectDescriptionRef = useRef(null);
  const product = productsDesciption[0];
  return (
    <div className="App">
      <Header servicesRef={servicesRef} productsRef={productsRef} />
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/products/:productId" element={<ProjectDescription ref={ProjectDescriptionRef}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer servicesRef={servicesRef} productsRef={productsRef}  headerRef={headerRef}/>
      </Router>

      <CardDetail title={product.name}
			description={product.description}
			series={product.series}
			KeyFeatures={product.KeyFeatures}
			CustomizationOptions={product.CustomizationOptions}
			Extras={product.Extras}
			color={""}
			Future={product.Future}
      />
    </div>
  );
}

export default App;

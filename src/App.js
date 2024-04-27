import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectDescription from "./components/ProductDescription/ProjectDescription";
import Home from "./pages/Home";

const App = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  return (
    <div className="App">
      <Header servicesRef={servicesRef} productsRef={productsRef} />
      <Router>
        <Routes>
          <Route path="/"  element={<Home servicesRef={servicesRef} productsRef={productsRef} />} />
          <Route path="/products/:productId" element={<ProjectDescription />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer servicesRef={servicesRef} productsRef={productsRef} />
      </Router>
    </div>
  );
}

export default App;

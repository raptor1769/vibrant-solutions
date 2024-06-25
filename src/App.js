import { useRef } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectDescription from './components/ProductDescription/ProjectDescription';
import ServiceDescription from './components/ServiceDescription/ServiceDescription';
import Home from './pages/Home';
import { AboutUs } from './components/aboutUs/AboutUs';

const App = () => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const aboutUsRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Header servicesRef={servicesRef} productsRef={productsRef} aboutUsRef={aboutUsRef} />
        <Routes>
          <Route
            path="/"
            element={<Home servicesRef={servicesRef} productsRef={productsRef} aboutUsRef={aboutUsRef} />}
          />
          <Route path="/products/:productId" element={<ProjectDescription />} />
          <Route path="/services/:serivceId" element={<ServiceDescription />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer servicesRef={servicesRef} productsRef={productsRef} aboutUsRef={aboutUsRef} />
      </Router>
    </div>
  );
};

export default App;

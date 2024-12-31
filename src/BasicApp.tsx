import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicNavBar from "./components/BasicNavBar";
const Home: React.FC = () => <div>Home Page</div>;
const About: React.FC = () => <div>About Page</div>;
const Services: React.FC = () => <div>Services Page</div>;
const BasicApp: React.FC = () => {
  return (
    <Router>
      <BasicNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};
export default BasicApp;

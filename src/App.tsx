import React, { createContext, useContext } from "react";
import NavBar from "./components/NavBar";
import imgPath from "./assets/img_glasses.jpg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";

const App = () => {
  let navItems = ["Home", "About", "Service"];
  return (
    <>
    <Router>
      <div>
      <NavBar brandName={"EUROBELLA"} imgSrcPath={imgPath} navItems={navItems}></NavBar>
    </div>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
  </Routes>
  </Router>
    </>
  );
};

export default App;

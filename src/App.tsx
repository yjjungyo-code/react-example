import React, { createContext, useContext } from "react";
import NavBar from "./components/NavBar";
import imgPath from "./assets/img_glasses.jpg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Product from "./components/Product";
import About from "./components/About";
import Service from "./components/Service";
import Home from "./components/Home";
import UseContextExample from "./components/hooks/UseContextExample";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  let navItems = [
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "useContext", path: "/usecontextexample" },
  ];
  return (
    <>
      <Router>
        <div>
          <NavBar brandName={"EUROBELLA"} imgSrcPath={imgPath} navItems={navItems}></NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/usecontextexample" element={<UseContextExample />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

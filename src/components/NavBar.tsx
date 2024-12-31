import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";
interface navInfo {
  name: string;
  path: string;
}

interface NavBarProps {
  brandName: string;
  imgSrcPath: string;
  navItems: navInfo[];
}

const NavBar = ({ brandName, imgSrcPath, navItems }: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // <!-- Image and text -->
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={imgSrcPath} width="60" height="60" className="d-inline-block align-center" alt="" />
          <span className="fw-bolder fs-4 ">{brandName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-start d-flex flex-column flex-md-row" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item"><Link className="nav-link" to="/product"> Product</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about"> About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service"> Service</Link></li> */}

            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${selectedIndex === index ? "active" : ""}`}
                  to={item.path}
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <form className="d-flex role=search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);


  return (
    <div className={`navbar ${isActive ? "active" : ""}`}>
      <div className="navbar-left">
      <img src={logo} alt="logo" />
      </div>
      <div className="navbar-middle">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">What we Offer</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="">Connect Us</a>
          </li>
        </ul>
      </div>

      <div
        className={`burger ${isActive2 ? "active" : ""}`}
        onClick={() => {
          setIsActive2((prev) => !prev);
        }}
      >
        {" "}
        <div className="line-1 b-line"></div>
        <div className="line-2 b-line"></div>
        <div className="line-3 b-line"></div>
      </div>

      <div className={`res-nav-links ${isActive2 ? "active" : ""}`}>
        <div className="res-nav-links-in">
          <div className="res-navbar-middle">
            <ul className="res-nav-links-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">What we Offer</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Connect Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

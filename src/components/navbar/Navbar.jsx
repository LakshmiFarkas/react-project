import "./navbar.css";
import React, { useState } from "react";
import images from "../../constants/images";
import { FaHamburger } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import AnimateDiv from "../../container/AnimateDiv";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const newLocal = "navbar-cross";
  return (
    <>
      <div className="app-navbar">
        <div className="app-navbar-wrapper content_width">
          <AnimateDiv dir="down">
            <div className="app-navbar-logo">
              <img src={images.logo} />
            </div>
          </AnimateDiv>
          <AnimateDiv dir="down">
            <ul className="app-navbar-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </AnimateDiv>
          <AnimateDiv dir="down">
            <div className="app-navbar-login-register">
              <a href="#">Login</a>&nbsp;|&nbsp;<a href="#">Register</a>
            </div>
          </AnimateDiv>
          <div className="navbar-small-screen">
            {
              <FaHamburger
                size="28px"
                color="white"
                onClick={() => setToggleMenu(true)}
              />
            }
            {toggleMenu && (
              <div className="navbar-small-screen-overlay">
                <RxCross1
                  size="28px"
                  color="white"
                  className={newLocal}
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="app-navbar-small-screen-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

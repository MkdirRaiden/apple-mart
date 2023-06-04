import React from "react";
import { NavLink } from "react-router-dom";
import { Login, Register, CartBtn } from "./buttons";

const Header = () => {
  const navLinkEls = document.querySelectorAll(".nav-link");
  const windowPathname = window.location.pathname;
  navLinkEls.forEach((navLinkEl) => {
    const navLinkPathname = new URL(navLinkEl.to).pathname;
    if (windowPathname === navLinkPathname) {
      navLinkEl.classNameList.add("active");
    }
  });

  return (
    <>
      <nav
        className="navbar navbar-expand-lg gradient__bg navbar-dark py-3 shadow-sm"
        style={{ boxShadow: "3px 3px 15px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold fs-3 gradient__text"
            to="/apple-mart"
          >
            <span className="logo mx-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/apple.png"}
                alt=""
                class="animate__animated animate__bounceInDown animate__delay-1s"
              />
            </span>
            <span className="logo-text ">MART</span>
          </NavLink>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-4">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/apple-mart"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="header-buttons">
              <Login />
              <Register />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

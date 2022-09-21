import React from "react";
import { NavLink } from "react-router-dom";
import Services from "./Services";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                <strong className="gr">Grow</strong>{" "}
                <span className="yr"> Your</span>
                <strong className="business"> Business</strong> With
                <strong>  East & West</strong>
              </h1>
              <p className="main-hero-para">
                You focus on your business goals, let us take care of everything
                else for you at affordable prices
              </p>
              <li className="btn">
                <NavLink to="/contact">Get Started</NavLink>
              </li>
            </div>
          </div>
          {/*  --------------- main header right side--------------  */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img src="./images/hero3.png" alt="heroimg" className="img-fluid" />
          </div>
        </section>
      </header>
      <Services/>
    </>
  );
};

export default Header;

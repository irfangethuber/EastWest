import React from "react";
import { NavLink } from "react-router-dom";

const About_Us = () => {
  return (
    <>
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
            <h1 className="display-3">
              <strong>About East & West </strong>
            </h1>
            <p className="main-para">
              East and West is a customized IT solutions based company located
              in Dera Ismail Khan, Pakistan. It was established in 2007. We have
              proven over 10,000 hours of software development. We offer an
              extensive range of services to reach your targeted spectators and
              carve up your valuable information focusing on retaining your
              customers. Our services include Website design and rank
              technologies (Javascript, Jquery, Angular, Typescript, Wordpress),
              Web application development ( .Net and Mean Stack) and Desktop
              Applications (.NET/C# and Java).
            </p>
            
            <NavLink to="/">Contact Us</NavLink>
          </div>
        </div>
        {/*  --------------- main header right side--------------  */}
        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
          <img src="./images/about.png" alt="heroimg" className="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default About_Us;

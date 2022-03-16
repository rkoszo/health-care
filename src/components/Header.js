import React from "react";

/* self imports */
import headerImg from "../assets/header.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <h1>Complete Health Care Solutions For Everyone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/appointment" className="btn">
            Make Appointment
          </a>
        </div>
        <div className="header__image">
          <img src={headerImg} alt="Header" />
        </div>
      </div>
    </header>
  );
};

export default Header;

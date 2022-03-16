import React, { useEffect, useLayoutEffect, useState } from "react";

/* self imports */

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useLayoutEffect(() => {
    const isMediumScreen = () => {
      const mediumScreen = window.matchMedia("(max-width: 1024px)");
      if (mediumScreen.matches) {
        setShowMenu(true);
      } else {
        resetMenuSettings();
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", isMediumScreen);

    isMediumScreen();

    return () => window.removeEventListener("resize", isMediumScreen);
  }, []);

  useEffect(() => {
    const closeMenuOnClickEvent = () => {
      if (isMenuActive) closeMenu();
    };

    window.addEventListener("click", closeMenuOnClickEvent);

    return () => window.removeEventListener("click", closeMenuOnClickEvent);
  }, [isMenuActive]);

  const resetMenuSettings = () => {
    const navItems = document.querySelector("#nav__items");
    if (navItems && navItems.style.display) navItems.style = {};

    setIsMenuActive(false);
  };

  const closeMenu = () => {
    const navItems = document.querySelector("#nav__items");
    if (navItems) navItems.style.display = "none";

    setIsMenuActive(false);
  };

  const openMenu = () => {
    const navItems = document.querySelector("#nav__items");
    if (navItems) navItems.style.display = "flex";

    setIsMenuActive(true);
  };

  return (
    <nav>
      <div className="container">
        <a href="h3" className="nav__logo">
          <h3>HealthCare</h3>
        </a>

        <ul id="nav__items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/specialists">Specialists</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/appointment" className="btn">
              Make Appointment
            </a>
          </li>
        </ul>

        {showMenu && (
          <>
            {isMenuActive ? (
              <button onClick={closeMenu}>
                <i className="bx bx-x"></i>
              </button>
            ) : (
              <button onClick={openMenu}>
                <i className="bx bx-menu"></i>
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

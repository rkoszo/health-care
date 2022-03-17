import React, { useEffect, useLayoutEffect, useState } from "react";

const MenuListItem = (props) => {
  const { href, name, className = {} } = props;

  return (
    <li>
      <a href={href} className={className}>
        {name}
      </a>
    </li>
  );
};

const Navbar = ({
  menuItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/specialists",
      name: "Specialists",
    },
    {
      href: "/testimonials",
      name: "Testimonials",
    },
    {
      href: "/appointment",
      name: "Make Appointment",
      className: "btn",
    },
  ],
}) => {
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

  const menuListItems = menuItems.map((item) => (
    <MenuListItem key={item.name} {...item} />
  ));

  return (
    <nav>
      <div className="container">
        <a href="h3" className="nav__logo">
          <h3>HealthCare</h3>
        </a>

        <ul id="nav__items">{menuListItems}</ul>

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

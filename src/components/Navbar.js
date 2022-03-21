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
      href: "#",
      name: "Home",
    },
    {
      href: "#services",
      name: "Services",
    },
    {
      href: "#specialists",
      name: "Specialists",
    },
    {
      href: "#testimonials",
      name: "Testimonials",
    },
    {
      href: "#appointment",
      name: "Make Appointment",
      className: "btn",
    },
  ],
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useLayoutEffect(() => {
    const isMediumScreen = () => {
      if (window.innerWidth < 1024) {
        setShowMenu(true);
      } else {
        resetMenuSettings();
        setShowMenu(false);
      }
    };

    const changeNavbarStyleOnScroll = () => {
      document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
    };

    window.addEventListener("scroll", changeNavbarStyleOnScroll);
    window.addEventListener("resize", isMediumScreen);

    isMediumScreen();

    return () => {
      window.removeEventListener("scroll", changeNavbarStyleOnScroll);
      window.removeEventListener("resize", isMediumScreen);
    };
  }, []);

  useEffect(() => {
    let navItems;

    if (isMenuActive) {
      navItems = document.querySelectorAll("#nav__items li a");
      navItems.forEach((navItem) => {
        navItem.addEventListener("click", closeMenu);
      });
    }

    return () => {
      if (navItems) {
        navItems.forEach((navItem) => {
          navItem.removeEventListener("click", closeMenu);
        });
      }
    };
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
          <h3>HEALTHCARE</h3>
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

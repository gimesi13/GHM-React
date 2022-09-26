import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OutsideClick from "detect-outside-click-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { CgMenu, CgClose } from "react-icons/cg";

function Navbar({ i18n, t, setActiveLanguage, activelanguage }) {
  /* states */
  const [isOpen, setIsOpen] = useState(false);
  const controlMenu = useAnimation();
  const [navbar, setNavbar] = useState(false);

  const menuItems = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_rooms"), href: "#rooms" },
    { name: t("nav_location"), href: "#location" },
    { name: t("nav_slopes"), href: "#slopes" },
    { name: t("nav_gallery"), href: "#gallery" },
    { name: t("nav_contact"), href: "#contact" },
    { name: t("nav_book_now"), href: "/book" },
  ];

  /* variants */
  const animateMenu = {
    hidden: {
      clipPath: "circle(0% at 50% -50%)",
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
    show: {
      clipPath: "circle(150% at 50% 0%)",
      transition: {
        type: "tween",
        duration: 1,
        delayChildren: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

  const animateMenuItems = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  /* FUNCTIONS */

  // navbar on scroll behavior
  const handleNavBarScroll = () => {
    if (window.scrollY >= 400) {
      !navbar && setNavbar(true);
    } else {
      navbar && setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleNavBarScroll, { passive: true });

  useEffect(() => {
    if (navbar === true) {
      let nav = document.getElementById("navbar");
      nav.classList.add("shrink");
    } else {
      let nav = document.getElementById("navbar");
      nav.classList.remove("shrink");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar]);

  /*LANGUAGE SWITCHER*/
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setActiveLanguage(e.target.value);
  };

  /* Menu click handler */
  const handleClick = () => {
    setIsOpen(!isOpen);
    controlMenu.set({ scale: 0 });
    controlMenu.start({ scale: 1 });
  };

  return (
    <motion.div
      className="navbar"
      id="navbar"
      initial={{ y: "-8rem" }}
      animate={{ y: 0 }}
    >
      <div className="navbar-left"></div>
      <div className="navbar-middle">
        <a href="#home">
          <div className="logo">{t("title")}</div>
        </a>

        <div className="youth-hostel">-{t("youth_hostel")}-</div>
      </div>

      <div className="navbar-right">
        <NavLink to="/book">
          <motion.div
            className="book-now-btn"
            whileHover={{ borderRadius: "2rem" }}
            whileTap={{ scale: 0.9 }}
          >
            {t("BOOK_NOW")}
          </motion.div>
        </NavLink>
      </div>
      <motion.div
        className="hamburger-menu"
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <motion.div animate={controlMenu}>
            <CgClose />
          </motion.div>
        ) : (
          <motion.div animate={controlMenu}>
            <CgMenu />
          </motion.div>
        )}
      </motion.div>
      <OutsideClick
        close={() => {
          isOpen && setIsOpen(false);
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-menu-items"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={animateMenu}
            >
              <ul>
                {menuItems.map((item) => {
                  return (
                    <motion.li key={item.name} variants={animateMenuItems}>
                      <HashLink
                        onClick={() => {
                          isOpen && setIsOpen(false);
                        }}
                        to={item.href}
                        smooth
                        className="link"
                      >
                        {item.name}
                      </HashLink>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </OutsideClick>

      <select
        defaultValue={activelanguage}
        className="language"
        name="language"
        onChange={handleChange}
      >
        <option value="en">🇬🇧</option>
        <option value="ge">🇩🇪</option>
        <option value="hu">🇭🇺</option>
      </select>
    </motion.div>
  );
}

export default Navbar;

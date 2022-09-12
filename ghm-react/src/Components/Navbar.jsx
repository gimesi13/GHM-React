import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import OutsideClick from "detect-outside-click-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { CgMenu, CgClose } from "react-icons/cg";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Location", href: "#location" },
  { name: "Slopes", href: "#slopes" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  { name: "Book Now", href: "/book" },
];

/* variants */
const animateMenu = {
  hidden: {
    clipPath: "circle(0% at 50% -70%)",
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.4,
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

function Navbar({ i18n }) {
  /* states */
  const [isOpen, setIsOpen] = useState(false);
  const controlMenu = useAnimation();
  const [navbar, setNavbar] = useState(false);
  const grow = useAnimation();
  const shrink = useAnimation();

  /* FUNCTIONS */

  // navbar on scroll behavior
  const handleNavBarScroll = () => {
    if (window.scrollY >= 10) {
      !navbar && setNavbar(true);
    } else {
      navbar && setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleNavBarScroll, { passive: true });

  useEffect(() => {
    if (navbar === true) {
      shrink.set({ height: 96, backgroundColor: "transparent" });
      shrink.start({ height: 64, backgroundColor: "black" });
    } else {
      grow.set({ height: 64, backgroundColor: "black" });
      grow.start({ height: 96, backgroundColor: "transparent" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar]);

  /*LANGUAGE SWITCHER*/
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  /* Menu click handler */
  const handleClick = () => {
    controlMenu.set({ scale: 0 });
    controlMenu.start({ scale: 1 });
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="navbar"
      initial={false}
      animate={navbar ? shrink : grow}
    >
      <div className="navbar-left"></div>
      <div className="navbar-middle">
        <div className="logo">GUESTHOUSE MITTERBACH</div>
        <div className="youth-hostel">-youth hostel-</div>
      </div>

      <div className="navbar-right">
        <NavLink to="/book">
          <div className="book-now-btn">BOOK NOW</div>
        </NavLink>
      </div>
      <div className="hamburger-menu" onClick={handleClick}>
        {isOpen ? (
          <motion.div animate={controlMenu}>
            <CgClose />
          </motion.div>
        ) : (
          <motion.div animate={controlMenu}>
            <CgMenu />
          </motion.div>
        )}
      </div>
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

      <select className="language" name="language" onChange={handleChange}>
        <option value="en">English</option>
        <option value="ge">German</option>
        <option value="hu">Hungarian</option>
      </select>
    </motion.div>
  );
}

export default Navbar;

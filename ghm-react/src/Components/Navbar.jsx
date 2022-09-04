import React, { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { CgMenu, CgClose } from "react-icons/cg";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Rooms", href: "#rooms" },
  { name: "About Us", href: "#about" },
  { name: "Location", href: "#location" },
  { name: "Slopes", href: "#slopes" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  { name: "Languages", href: "#languages" },
];

/* variants */
const animateMenu = {
  hidden: {
    clipPath: "circle(50% at 50% -50%)",
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
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">LOGO</div>
        Left
      </div>
      <div className="navbar-right">
        <select className="language" name="language" onChange={handleChange}>
          <option value="en">English</option>
          <option value="ge">German</option>
          <option value="hu">Hungarian</option>
        </select>
        Right
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
                    {item.name}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

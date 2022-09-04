import React from "react";

function Navbar({ i18n }) {
  /*LANGUAGE SWITCHER*/
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <select name="language" onChange={handleChange}>
        <option value="en">English</option>
        <option value="ge">German</option>
        <option value="hu">Hungarian</option>
      </select>
    </>
  );
}

export default Navbar;

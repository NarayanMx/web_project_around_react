import React from "react";
import logo from "../../../images/Logo_white.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo del proyecto Around US"
        className="header__logo"
      />
    </header>
  );
}

export default Header;

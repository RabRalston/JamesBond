import React from "react";
import Logo from "../assets/007.png";

const Header = props => {
  return (
    <header className="header">
      <img src={Logo} alt="logo"></img>
    </header>
  );
};

export default Header;
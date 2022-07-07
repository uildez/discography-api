import React from "react";

import Logo from "../../assets/images/logo.png";
import "./navbar.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links_logo">
        <img src={Logo} alt="Logo Tião" />
      </div>
      <h2>Discografia</h2>
    </div>
  );
}

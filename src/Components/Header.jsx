import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="nav-item ms-auto" to="/">
        Home
      </Link>
      <Link className="nav-item me-auto" to="/products">
        Products
      </Link>
    </header>
  );
}

export default Header;

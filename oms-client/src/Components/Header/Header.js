import React from "react";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import image from "../../Assests/brand-logo.png";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="navbarContainer">
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <div className="navbarBrand">
          <img src={image} alt="" className="navbarBrandImage" />
          <div className="navbarBrandText">WellWise</div>
        </div>
      </Link>
      <div className="navbarSearchBox">
        <input
          type="text"
          className="navbarSearchBoxInput"
          placeholder="Search"
        />
        <div className="navbarSearchBoxIcon">
          <Search />
        </div>
      </div>
      <div className="navbarMenu">
        <li className="navbarMenuItem">Login</li>
        <li className="navbarMenuItem">Signup</li>
        <li className="navbarMenuItem">
          <Link
            to={"orders"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Orders
          </Link>
        </li>
      </div>
      <div className="navbarCart">
        <div className="navbarCartCount">0</div>
        <ShoppingCart className="navbarCartIcon"></ShoppingCart>
      </div>
    </div>
  );
}

export default Header;

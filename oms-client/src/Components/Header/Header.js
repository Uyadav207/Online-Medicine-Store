import React, { useContext } from "react";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import image from "../../Assests/brand-logo.png";
import Person from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import "./header.css";
import {ShowLogin} from "../../App";
function Header() {

  const [loginShow,setLoginShow] = useContext(ShowLogin);
  return (
    <div className="navbarContainer">
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <div className="navbarBrand">
          <img src={image} alt="" className="navbarBrandImage" />
          <div className="navbarBrandText">WellWise</div>
        </div>
      </Link>
   
      <div className="navbarMenu">
        <li className="navbarMenuItem" onClick={()=>{ setLoginShow(true)}}>Login</li>
        <li className="navbarMenuItem">Signup</li>
        <li className="navbarMenuItem">About Us</li>
        <li className="navbarMenuItem">
          <Link
            to={"orders"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Orders
          </Link>
        </li>
        <li className="navbarMenuItem"><Person></Person>sagarmish1234</li>
      </div>
      <div className="navbarCart">
        <div className="navbarCartCount">0</div>
        <ShoppingCart className="navbarCartIcon"></ShoppingCart>
      </div>
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
    </div>
  );
}

export default Header;

import React, { useContext,useEffect } from "react";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import image from "../../Assests/brand-logo.png";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./header.css";
import { ShowLogin, ShowSignup, UserDetails } from "../../App";


function Header() {
  const [loginShow, setLoginShow] = useContext(ShowLogin);
  const [showSignup, setShowSignup] = useContext(ShowSignup);
  const [userDetails, setUserDetails] = useContext(UserDetails);

  useEffect(() => {
      if(localStorage.getItem("userDetails")){
          setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
      }
  },[userDetails]);


  return (
    <div className="navbarContainer">
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }} onClick={()=>{ setShowSignup(false);
            setLoginShow(false); }}>
        <div className="navbarBrand">
          <img src={image} alt="" className="navbarBrandImage" />
          <div className="navbarBrandText">WellWise</div>
        </div>
      </Link>

      <div className="navbarMenu">
        {!userDetails && <li
          className="navbarMenuItem"
          onClick={() => {
            setShowSignup(false);
            setLoginShow(true);
          }}
        >
          Login
        </li>}
        {!userDetails && <li
          className="navbarMenuItem"
          onClick={() => {
            setShowSignup(true);
            setLoginShow(false);
          }}
        >
          Signup
        </li>}
        <li className="navbarMenuItem">About Us</li>
        {userDetails && <li className="navbarMenuItem">
          <Link
            to={"orders"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Orders
          </Link>
        </li>}
        {userDetails && <li className="navbarMenuItem">
          <Person></Person>{userDetails.email}
        </li>}
      </div>
      <Link to={"/checkout"} style={{ textDecoration: "none", color: "black" }}>
      <div className="navbarCart">
        <div className="navbarCartCount">0</div>
        <ShoppingCart className="navbarCartIcon"></ShoppingCart>
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
    </div>
  );
}

export default Header;

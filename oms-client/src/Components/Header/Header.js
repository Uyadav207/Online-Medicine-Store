import React, { useContext, useEffect, useState } from "react";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import image from "../../Assests/brand-logo.png";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./header.css";
import { BASE_URL } from "../../Config/BaseUrl";
import {
  ShowLogin,
  ShowSignup,
  UserDetails,
  ProductHome,
  SearchBox,
  Cart,
} from "../../App";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Header() {
  const [loginShow, setLoginShow] = useContext(ShowLogin);
  const [showSignup, setShowSignup] = useContext(ShowSignup);
  const [userDetails, setUserDetails] = useContext(UserDetails);
  const [productHome, setProductHome] = useContext(ProductHome);
  const [searchBox, setSearchBox] = useContext(SearchBox);
  const [cart, setCart] = useContext(Cart);
  const [temp, setTemp] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    }
    const getProducts = async () => {
      const response = await fetch(`${BASE_URL}/products/getAllProducts`, {
        method: "GET",
      });
      const data = await response.json();
      setProductHome(data.filter((medicine) => medicine.id <= 12));
    };

    getProducts();
    // getCart();
    return;
  }, []);
  const getCart = async () => {
    const response = await fetch(
      `${BASE_URL}/addtocart/getCartsByUserId/${
        JSON.parse(localStorage.getItem("userDetails")).id
      }`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    var temp = [];
    if (data.length > 0) {
      data.map((item) => {
        let product = productHome.filter(
          (medicine) => medicine.id === item.productId
        )[0];
        product = { ...product, quantity: item.quantity };
        temp = [...temp, product];
      });
    }
    setCart(temp);
    // console.log(temp);
  };
  useEffect(() => {
    getCart();
  }, [productHome]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setUserDetails(null);
    setShowLogout(false);
    setCart([]);
  };

  return (
    <div className="navbarContainer">
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => {
          setShowSignup(false);
          setLoginShow(false);
        }}
      >
        <div className="navbarBrand">
          <img src={image} alt="" className="navbarBrandImage" />
          <div className="navbarBrandText">CogMed</div>
        </div>
      </Link>

      <div className="navbarMenu">
        {!userDetails && (
          <li
            className="navbarMenuItem"
            onClick={() => {
              setShowSignup(false);
              setLoginShow(true);
            }}
          >
            Login
          </li>
        )}
        {!userDetails && (
          <li
            className="navbarMenuItem"
            onClick={() => {
              setShowSignup(true);
              setLoginShow(false);
            }}
          >
            Signup
          </li>
        )}
        <li className="navbarMenuItem">About Us</li>
        {userDetails && (
          <li className="navbarMenuItem">
            <Link
              to={"orders"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Orders
            </Link>
          </li>
        )}
        {userDetails && (
          <div>
            <li
              className="navbarMenuItem"
              onClick={() => {
                setShowLogout(!showLogout);
              }}
            >
              <Person></Person>
              {userDetails.email}
            </li>
            {showLogout && (
              <li className="navbarMenuItem dropdown" onClick={handleLogout}>
                <Logout /> Logout
              </li>
            )}
          </div>
        )}
      </div>
      <Link to={"/checkout"} style={{ textDecoration: "none", color: "black" }}>
        <div className="navbarCart">
          <div className="navbarCartCount">{cart.length}</div>
          <ShoppingCart className="navbarCartIcon"></ShoppingCart>
        </div>
      </Link>

      <div className="navbarSearchBox">
        <input
          type="text"
          className="navbarSearchBoxInput"
          placeholder="Search"
          name="searchBox"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
        <div
          className="navbarSearchBoxIcon"
          onClick={() => {
            if (temp) {
              setSearchBox(temp);
              navigate(`/products/${temp}`);
            }
          }}
        >
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;

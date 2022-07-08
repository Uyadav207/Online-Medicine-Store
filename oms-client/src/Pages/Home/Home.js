import React, { useContext } from "react";
import "./home.css";
import Login from "../../Components/Login/Login";
import { ShowLogin, ShowSignup } from "../../App";
import Signup from "../../Components/Signup/Signup";
import ProductCard from "../../Components/ProductCard/ProductCard";
function Home() {
  const [loginShow, setLoginShow] = useContext(ShowLogin);
  const [showSignup, setShowSignup] = useContext(ShowSignup);
  return (
    <div className="homeContainer">
      Home
      <ProductCard></ProductCard>      
      {loginShow && <Login></Login>}
      {showSignup && <Signup></Signup>}
    </div>
  );
}

export default Home;

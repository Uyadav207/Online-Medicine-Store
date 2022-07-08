import React, { useContext } from "react";
import "./home.css";
import Login from "../../Components/Login/Login";
import {ShowLogin} from "../../App"
function Home() {

  const [loginShow, setLoginShow] = useContext(ShowLogin);

  return (
    <div className="homeContainer">
      Home
      {loginShow && <Login></Login>}
    </div>
  );
}

export default Home;

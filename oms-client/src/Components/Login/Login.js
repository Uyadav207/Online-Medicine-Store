import React, { useState, useContext } from "react";
import Image from "../../Assests/login-Image.webp";
import Close from "@mui/icons-material/Close";
import { ShowLogin } from "../../App";
import "./login.css";
function Login() {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [loginShow, setLoginShow] = useContext(ShowLogin);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <img src={Image} alt="" className="loginImage" />
        <div className="loginForm">
          <Close
            className="loginCloseButton"
            onClick={() => {
              setLoginShow(false);
            }}
          ></Close>
          <div className="loginFormTitle">Login</div>
          <p
            style={{
              color: "grey",
              fontSize: ".8rem",
              marginBottom: "30px",
              marginTop: "10px",
            }}
          >
            Get access to your orders, prescriptions and other benefits
          </p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="loginFormInput"
            onChange={handleChange}
          />
          <input
            type={formInfo.showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="loginFormInput"
            onChange={handleChange}
          />
          <div>
            <input
              type="checkbox"
              name="showPassword"
              id="showPassword"
              onChange={() =>
                setFormInfo({
                  ...formInfo,
                  showPassword: !formInfo.showPassword,
                })
              }
            />
            <label htmlFor="showPassword" className="loginFormShowPassword">
              Show Password
            </label>
          </div>
          <button className="loginFormButton">Sign in</button>
          <div className="loginFormText">
            Don't have and account? &nbsp;
            <span style={{color:"#017aff",textDecoration:"underline"}}>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState,useContext } from "react";
import "./signup.css";
import Image from "../../Assests/signup-image.webp";
import Close from "@mui/icons-material/Close";
import {ShowSignup} from "../../App"

function Signup() {
    const [showSignup, setShowSignup] = useContext(ShowSignup);

  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    age: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  return (
    <div className="signupBackground">
      <div className="signupContainer">
        <img src={Image} alt="" className="signupImage" />
        <div className="signupForm">
        <Close
            className="signupCloseButton"
            onClick={() => {
              setShowSignup(false);
            }}
          ></Close>
          <div className="signupFormTitle">Signup</div>
          <input
            type="text"
            className="signupFormInput"
            name="fullName"
            placeholder="Full Name"
            value={formInfo.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="signupFormInput"
            value={formInfo.email}
            onChange={handleChange}
          />
          <input
            type={formInfo.showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="signupFormInput"
            value={formInfo.password}
            onChange={handleChange}
          />
          <input
            type={formInfo.showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="signupFormInput"
            value={formInfo.confirmPassword}
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
            <label htmlFor="showPassword" className="signupFormShowPassword">
              Show Password
            </label>
          </div>
          <textarea
            type="text"
            name="address"
            placeholder="Address"
            className="signupFormInput"
            value={formInfo.address}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="signupFormInput"
            value={formInfo.age}
            onChange={handleChange}
          />
          <select name="gender" id="gender" onChange={handleChange} className="signupFormDropDown">
            <option value="select">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
          </select>
          <button className="signupFormButton">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

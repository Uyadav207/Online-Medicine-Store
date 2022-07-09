import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Orders from "./Pages/Orders/Orders";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

export const ShowLogin = createContext(false);
export const ShowSignup = createContext(false);
export const UserDetails = createContext(null);

function App() {
  const [loginShow, setLoginShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  return (
      <ShowLogin.Provider value={[loginShow, setLoginShow]}>
        <ShowSignup.Provider value={[showSignup, setShowSignup]}>
          <UserDetails.Provider value={[userDetails, setUserDetails]}>
          <Router>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer></Footer>
          </Router>
          {loginShow && <Login></Login>}
          {showSignup && <Signup></Signup>}
          </UserDetails.Provider>
        </ShowSignup.Provider>
      </ShowLogin.Provider>
  );
}

export default App;

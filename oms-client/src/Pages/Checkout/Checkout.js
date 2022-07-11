import React, { useContext, useEffect, useState } from "react";
import CheckoutCard from "../../Components/CheckoutCards/checkoutcard/CheckoutCard";
import CheckoutcartEmpty from "../../Components/CheckoutCards/checkoutcartEmpty/CheckoutcartEmpty";
import { Cart } from "../../App";

function Checkout() {
  const [cart, setCart] = useContext(Cart);
  // useEffect(() => {},[])
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    setTemp(true);
  },[cart])
  
  return (
    <div>{cart.length == 0 ? <CheckoutcartEmpty /> : <CheckoutCard />}</div>
  );
}

export default Checkout;

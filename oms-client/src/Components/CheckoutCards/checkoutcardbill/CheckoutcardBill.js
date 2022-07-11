import React, { useEffect, useState } from "react";
import "./checkoutcardbill.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext } from "react";
import { Cart } from "../../../App";
import { BASE_URL } from "../../../Config/BaseUrl";

function CheckoutcardBill() {
  const [cart] = useContext(Cart);
  const [total, setTotal] = useState(0);

  const handleCheckout = async () => {
    const productIds = cart.map((item) => item.id);
    const quantity = cart.map((item) => item.quantity);
    const response = await fetch(`${BASE_URL}/order/checkout_order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({
        productIds,
        quantity,
        price: total,
        userId: JSON.parse(localStorage.getItem("userDetails")).id,
        address: JSON.parse(localStorage.getItem("userDetails")).address,
        paymentType: "COD",
        deliveryAddress: JSON.parse(localStorage.getItem("userDetails"))
          .address,
      }),
    });

    if (response.status === 200) {
        alert("Order Placed Successfully");
    }
    else{
        alert("Something went wrong");
    }

  };

  useEffect(() => {
    // console.log(cart);
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  return (
    <div className="col container_bill">
      <div className="title">
        <p>Billing Details</p>
      </div>
      <div className="container_subtotal_inner">
        <p className="subtotal">
          <small>Subtotal</small>
          <strong>₹ {total}</strong>
        </p>
        <p className="shipping_charge">
          <small>Shipping</small>
          <strong>₹ {0.02 * total}</strong>
        </p>
        <p className="shipping_charge">
          <small>GST Tax.</small>
          <strong>₹ {0.15 * total}</strong>
        </p>
        <p className="total">
          <small>Total (tax Incl.)</small>
          <strong>₹ {Math.round(1.17 * total)}</strong>
        </p>
        <div className="place-order">
          <p>
            <small>₹ {Math.round(1.17 * total)}</small>
            <small>
              Checkout{" "}
              <ArrowForwardIcon fontSize="small" style={{ marginLeft: "10" }} />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutcardBill;

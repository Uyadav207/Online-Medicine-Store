import React, { useContext } from "react";
import "./checkoutcardproduct.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Cart, UserDetails } from "../../../App";
import { BASE_URL } from "../../../Config/BaseUrl";

function CheckoutcardProduct({
  name,
  image,
  description,
  price,
  quantity,
  id,
}) {
  const [cart, setCart] = useContext(Cart);
  const [userDetails, setUserDetails] = useContext(UserDetails);
  const handleRemove = async () => {
    const response = await fetch(
      `${BASE_URL}/addtocart/removeProductFromCart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({ userId: userDetails.id, productId: id }),
      }
    );
    // const data = await response.json();
    setCart(cart.filter((item) => item.id !== id));
    console.log(cart);
    
    // if (response.status === 200) {
    // } else {
    //   alert("Something went wrong");
    // }
    // setCart(temp);
    // console.log(temp);
  };

  return (
    <>
      <div className="continue-shopping-info-inner">
        <p className="product-name">
          <strong>{name}</strong>
          <small className="price">₹ {price}</small>
        </p>
        <p className="product-description">
          {description}
          <div className="quantity">
            <span className="subtractButton">
              <RemoveIcon></RemoveIcon>
            </span>
            <input maxLength={2} value={quantity} />
            <span className="addButton">
              <AddIcon></AddIcon>
            </span>
          </div>
        </p>
        <p
          className="buttons"
          onClick={handleRemove}
          style={{ cursor: "pointer" }}
        >
          <small className="remove">
            {" "}
            <DeleteIcon color="#d4d4d4" fontSize="34" /> Remove
          </small>
        </p>
      </div>
    </>
  );
}

export default CheckoutcardProduct;

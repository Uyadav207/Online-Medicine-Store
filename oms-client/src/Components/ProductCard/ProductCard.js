import React from "react";
import "./productcard.css";
function ProductCard({image, name, description, rating, price}) {
  return (
    <div className="card" style={{width:"14rem", borderRadius: "5", height:"21rem"}}>
      <img src={image} className="card-img-top card-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text description">
          {description}
        </p>
        <p className="card-text rating">
          <small>{rating} ★ </small>
          <strong> ratings</strong>
        </p>
        <p className="card-text price">
          <div>
          <strong>₹</strong>
          <small>{price}</small>
          </div>
          <a href="#" class="btn noHover btn-sm">ADD</a>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

function Cart({ title, subtitle, content, price, subprice, image }) {
  return (
    <Link to="/contact" className="cart">
      <img src={image} alt={title} className="cart-img" />
      <h2 className="cart-title">{title}</h2>
      <h1 className="cart-subtitle">{subtitle}</h1>
      <p className="cart-content">{content}</p>
      <div className="cart-price">
        <h2>{price}</h2>
        <p>{subprice}</p>
      </div>
    </Link>
  );
}

export default Cart;

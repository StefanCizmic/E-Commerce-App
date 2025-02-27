import React from "react";
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const removeCartItem = (cartItem) => {
    const filteredCart = cart.filter((item) => cartItem.id !== item.id);
    setCart(filteredCart);
  };
  return (
    <div className="cart-content">
        <ul className="cart-box">
          {cart.length > 0 &&
            cart.map((cartItem) => {
              return (
                <li key={cartItem.id} className="cart-item">
                    <div className="cart-img">
                      <img src={cartItem.img} alt="cart-item-img" />
                    </div>
                    <div className="cart-info"></div>
                    <span onClick={() => removeCartItem(cartItem)}>X</span>
                </li>
              );
            })}
        </ul>
   </div>
  );
};

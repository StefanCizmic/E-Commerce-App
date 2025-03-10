import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = ({ cart, setCart }) => {
  const removeCartItem = (cartItem) => {
    const filteredCart = cart.filter((item) => cartItem.id !== item.id);
    setCart(filteredCart);
  };

  return (
    <div className="cart-content">
      {cart.length > 0 ? (
        <table className="cart-box">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.id} className="cart-item">
                <td className="cart-product">
                  <div className="product-img">
                    <img src={cartItem.img} alt="cart-item-img" />
                  </div>
                  <div className="product-title">
                    <p>
                      {cartItem.artist} - {cartItem.title}
                    </p>
                  </div>
                </td>
                <td>{cartItem.price} &#36;</td>
                <td></td>
                <td></td>
                <td onClick={() => removeCartItem(cartItem)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="remove-cart-item"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-cart-msg">
          <p>There are no items in cart</p>
        </div>
      )}
    </div>
  );
};

import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = ({ cart, setCart }) => {
  let total = 0;

  const calculatePricing = (id, price) => {
    let quantity = 0;
    let subtotal = 0;

    cart.map((quant) => {
      if (quant.id === id) {
        quantity++;
      }
    });

    subtotal = quantity * price;
    total += subtotal / 2;

    return { quantity, subtotal };
  };

  const removeCartItem = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        setCart([...cart]);
        break;
      }
    }
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
            {cart
              .filter(
                (cartItem, index, self) =>
                  index === self.findIndex((t) => t.id === cartItem.id)
              )
              .sort((a, b) => a.price - b.price)
              .map((cartItem) => (
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
                  <td className="product-data-end">{cartItem.price} &#36;</td>
                  <td className="product-data-end">
                    {calculatePricing(cartItem.id, cartItem.price).quantity}
                  </td>
                  <td className="product-data-end">
                    {calculatePricing(cartItem.id, cartItem.price).subtotal}{" "}
                    &#36;
                  </td>
                  <td
                    onClick={() => removeCartItem(cartItem.id)}
                    className="product-data-end"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="remove-cart-item"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr style={{ position: "relative", top: "5px", fontSize: "18px" }}>
              <td>total = {total}&#36;</td>
              <td className="continue-pay-btn">continue</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="empty-cart-msg">
          <p>There are no items in cart</p>
        </div>
      )}
    </div>
  );
};

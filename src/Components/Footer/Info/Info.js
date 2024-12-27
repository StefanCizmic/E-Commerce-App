import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

export const Info = () => {
  return (
    <ul className="infoFooter">
      <li>
        <Link to="faq">FAQs</Link>
      </li>
      <li>
        <Link to="contactus">Contact Us</Link>
      </li>
      <li>
        <Link to="shippingpolicy">Shipping Policy</Link>
      </li>
      <li>
        <Link to="termsofservice">Terms of Service</Link>
      </li>
    </ul>
  );
};

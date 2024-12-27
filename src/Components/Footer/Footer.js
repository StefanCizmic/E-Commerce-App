import React from "react";
import { Social } from "./Social/Social";
import { Info } from "./Info/Info";
import { Subscribe } from "./Subscribe/Subscribe";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <Social />
      </div>
      <div className="footerContent">
        <Info />
      </div>
      <div className="footerContent">
        <Subscribe />
      </div>
    </footer>
  );
};

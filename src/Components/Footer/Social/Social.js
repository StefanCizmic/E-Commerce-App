import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export const Social = () => {
  const openSite = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <ul>
      <li onClick={() => openSite("https://www.facebook.com/")}>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </li>
      <li onClick={() => openSite("https://www.instagram.com/")}>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </li>
      <li onClick={() => openSite("https://www.twitter.com/")}>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </li>
    </ul>
  );
};

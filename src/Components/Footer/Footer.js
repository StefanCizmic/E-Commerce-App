import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "./Footer.css";

export const Footer = () => {
  const customIcon = new Icon({
    iconUrl:
      "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png",
    iconSize: [38, 38],
  });
  return (
    <footer className="footer">
      <div>
        <div>
          <div>
            <h2>
              <i>Let there be music</i>
            </h2>
            <p>Harmony Records is a store for vinyl records.</p>
          </div>
          <div>
            <h4>WORKING HOURS</h4>
            <p>Monday &ndash; Friday: 10 AM &ndash; 9 PM</p>
            <p>Saturday: 10 AM &ndash; 6 PM</p>
            <p>Closed on Sundays</p>
          </div>
          <div>
            <h4>CONTACT</h4>
            <p>+1 (555) 123-4567</p>
            <p>harmonyrecords@gmail.com</p>
          </div>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>Copyright Harmony Records &copy; 2021-2025</p>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-map">
          <MapContainer
            center={[38.915348, -77.031661]}
            zoom={10}
            style={{ width: "95%", height: "230px", borderRadius: "10px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[38.915348, -77.031661]}
              icon={customIcon}
            ></Marker>
          </MapContainer>
        </div>
      </div>
    </footer>
  );
};

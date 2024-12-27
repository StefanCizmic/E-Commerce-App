import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faBars,
  faRecordVinyl,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import "./Navbar.css";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  const drawerContent = (
    <div>
      <FontAwesomeIcon
        className="x-mark"
        onClick={toggleDrawer(false)}
        icon={faXmark}
      />
      <span className="search-form" style={{ marginTop: "5px" }}>
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input
          type="text"
          placeholder="find records"
          style={{ backgroundColor: "#f5f5f5" }}
        />
      </span>
      <ul className="drawer-content">
        {["Home", "Shop", "Newsteller", "Club", "About", "Shipping"].map(
          (item) => (
            <li key={item} onClick={toggleDrawer(false)}>
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
  return (
    <nav>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: {
              xs: "250px",
              sm: "250px",
              md: "350px",
            },
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "16px",
            },
            backgroundColor: "#f5f5f5",
            padding: "20px 20px",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <div className="upper-nav">
        <div className="search">
          <div className="search-content">
            <span className="search-form">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              <input type="text" placeholder="find records" />
            </span>
            <button>search</button>
          </div>
        </div>
        <div className="store-name-cont">
          <Link to="/">
            <p className="store-name">
              Harmony Records{" "}
              <FontAwesomeIcon className="store-icon" icon={faRecordVinyl} />
            </p>
          </Link>
        </div>
        <div className="user-cart-cont">
          <Link to="/user">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Link>
          <Link to="/cart">
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </Link>
          <span className="responsive-menu-bars" onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <div className="bottom-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/newsteller">Newsteller</Link>
          </li>
          <li>
            <Link to="/club">Club</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

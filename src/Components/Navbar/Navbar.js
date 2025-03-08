import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faBars,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../Search/Search";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Navbar.css";

export const Navbar = ({ records, cart, cartAnimation }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const inputValue = useRef(null);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const typedText = e.target.value.toLowerCase();
    if (typedText.length > 0) {
      const filtered = records
        .filter((record) => {
          return (
            record.artist.toLowerCase().startsWith(typedText) ||
            record.title.toLowerCase().startsWith(typedText)
          );
        })
        .slice(0, 6);
      setFilteredRecords(filtered);
    } else {
      setFilteredRecords([]);
    }
  };

  const handleRecord = (record) => {
    navigate("/single", { state: { record } });
    setFilteredRecords([]);
    inputValue.current.value = "";
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  // useEffect(() => {
  //   const cartAnimation = () => {
  //     setAddToCart(true);
  //     setTimeout(() => {
  //       setAddToCart(false)
  //     }, 1500);
  //   };
  //   cartAnimation();
  // }, [cart]);

  return (
    <nav>
      <Sidebar
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
        inputHandler={inputHandler}
        filteredRecords={filteredRecords}
        handleRecord={handleRecord}
      />
      <div className="upper-nav">
        <div className="search">
          <div>
            <div className="search-content">
              <span className="search-form">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input
                  type="text"
                  placeholder="find records"
                  ref={inputValue}
                  onChange={inputHandler}
                  onBlur={() =>
                    setTimeout(() => {
                      setFilteredRecords([]);
                    }, 250)
                  }
                />
              </span>
            </div>
            <Search
              filteredRecords={filteredRecords}
              handleRecord={handleRecord}
            />
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
          <Link to="/cart">
            <span>
              <FontAwesomeIcon icon={faCartShopping} className={cartAnimation ? 'cart-animation' : ''}/>
              <small style={{ marginLeft: "2px" }}>{cart.length}</small>
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

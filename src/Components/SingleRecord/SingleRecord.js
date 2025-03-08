import React, { useContext } from "react";
import { CartContx } from "../../App";
import { useLocation } from "react-router-dom";
import "./SingleRecord.css";

export const SingleRecord = ({ setCartAnimation }) => {
  const location = useLocation();
  const { record } = location.state;
  const cart = useContext(CartContx);
  const addCartItem = (record) => {
    cart((prev) => [...prev, record]);
  };
  const cartAnim = () => {
    setCartAnimation(true);
    setTimeout(() => {
      setCartAnimation(false);
    }, 1000);
  };
  return (
    <div className="single-record">
      <div className="single-record-box">
        <div className="single-box-left">
          <div className="single-record-img">
            <img src={record?.img}></img>
          </div>
        </div>
        <div className="single-box-right">
          <div className="single-record-info">
            <ul>
              <li>
                <h2>{record?.artist}</h2>
              </li>
              <li>
                <h3>{record?.title}</h3>
              </li>
              <li>
                <span>Genre:</span>{" "}
                {record?.genre.map((gen) => gen.name).join(", ")}
              </li>
              <li>
                <span>Released:</span> {record?.release?.date}
              </li>
              <li>
                <span>Label:</span> {record?.release?.label}
              </li>
              <li>
                <span>Price:</span> {record?.price}&#36;
              </li>
              <li
                style={{
                  color: record?.availability === "In stock" ? "green" : "red",
                }}
              >
                <span style={{ color: "black" }}>Availability:</span>{" "}
                {record?.availability}
              </li>
            </ul>
            <button
              disabled={record?.availability === "Out of stock"}
              className={
                record?.availability === "In stock" ? "button-active" : null
              }
              onClick={() => {
                addCartItem(record);
                cartAnim();
              }}
            >
              Add to cart
            </button>
          </div>
          <div className="single-record-track">
            <ul>
              <li>
                <h4>Track listing:</h4>
              </li>
              {record?.tracks?.map((track, index) => {
                return (
                  <li key={index}>
                    {index + 1}. {track}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

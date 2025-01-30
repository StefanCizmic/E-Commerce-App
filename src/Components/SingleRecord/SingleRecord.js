import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SingleRecord.css";

export const SingleRecord = () => {
  const location = useLocation();
  const { record } = location.state;
  const [inStock, setInStock] = useState(Boolean);
  const setAvailability = () => {
    if (record?.availability === "In stock") {
      setInStock(true);
    } else if (record?.availability === "Out of stock") {
      setInStock(false);
    } else;
  };
  useEffect(() => {
    setAvailability();
  }, []);
  return (
    <div className="single-record">
      <div className="single-record-box">
        <div className="single-record-upper">
          <div>
            <div className="single-record-img">
              <img src={record?.img}></img>
            </div>
          </div>
          <div>
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
                  <span>Price:</span> {record?.price}&#8364;
                </li>
                <li
                  style={{
                    color: inStock ? "green" : "red",
                  }}
                >
                  <span>Availability:</span> {record?.availability}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-record-bottom">
        </div>
      </div>
    </div>
  );
};

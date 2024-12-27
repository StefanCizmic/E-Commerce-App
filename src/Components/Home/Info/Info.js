import React from "react";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info">
      <h1>WHAT IS FREAKY'S?</h1>
      <div className="infoCards">
        <div className="cardOne">
          <div>
            <h4>WHO ARE WE?</h4>
            <p>
              At Freaky's, we're reimagining the record club experience. Imagine
              receiving a unique Freaky's vinyl at your doorstep every
              month—exclusive editions you won't find elsewhere. It's more than
              just records; it's a curated journey through the world of music,
              with shipping always included.
            </p>
          </div>
        </div>
        <div className="cardTwo">
          <div>
            <h4>WHERE TO FIND US?</h4>
            <p>
              Discover Freaky's exclusively online at freakys.com. Explore our
              exclusive vinyl collection, available for purchase directly from
              our website.
            </p>
          </div>
        </div>
      </div>
      <p className="shipping">UK CUSTOMERS / <span>INCLUDED SHIPPING</span></p>
    </div>
  );
};

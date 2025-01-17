import React from "react";
import { Side } from "../Side/Side";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info">
      <Side popper="info" />
      <div className="info-cards">
        <div>
          <h4>WHO ARE WE?</h4>
          <p>
            At Harmony's, we're reimagining the record club experience. Imagine
            receiving a unique Freaky's vinyl at your doorstep every
            month—exclusive editions you won't find elsewhere. It's more than
            just records; it's a curated journey through the world of music,
            with shipping always included.
          </p>
        </div>
        <div>
          <h4>WHERE TO FIND US?</h4>
          <p>
            Discover Harmony's records exclusively online. Explore our exclusive
            vinyl collection, available for purchase directly from our website.
            Enjoy high-quality sound and unique editions, all at your
            fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

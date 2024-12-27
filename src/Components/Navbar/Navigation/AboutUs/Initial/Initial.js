import React from "react";
import "./Initial.css";

export const Initial = ({ setIsVisible, setAboutUs }) => {
  return (
    <div className="about-us-initial">
      <p
        className="find-out-more"
        onClick={() => {
          setAboutUs(false);
        }}
      >
        Find out more
      </p>
      <div className="text">
        <h1>
          <em>Harmony Records</em>
        </h1>
        <p>Your ultimate destination for vinyl treasures</p>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popper from "@mui/material/Popper";
import "./Sidename.css";

export const Sidename = ({ popper }) => {
  const [isRotated, setIsRotated] = useState(false);
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperText, setPopperText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePoper = (e) => {
    setIsRotated(!isRotated);
    setAnchorEl(e.currentTarget);
    setIsPopperOpen(!isPopperOpen);
    setPopperText(popper);
  };

  return (
    <div className="side-content">
      <FontAwesomeIcon
        aria-describedby="popper"
        className="angle-icon"
        icon={faAngleUp}
        onClick={(e) => {
          handlePoper(e);
        }}
        style={{
          transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease-in-out",
        }}
      />
      <Popper id="popper" open={isPopperOpen} anchorEl={anchorEl}
      >
        <p
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "2px",
            marginTop: "5px",
            marginLeft: "-8px",
            position: 'fixed'
          }}
        >
          {popperText}
        </p>
      </Popper>
    </div>
  );
};

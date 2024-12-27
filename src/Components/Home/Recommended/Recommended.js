import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";
import { Side } from "../Side/Side";
import "./Recommended.css";

export const Recommended = () => {
  return (
    <div className="suggested">
      <Side popper="recommended"/>
      <div></div>
    </div>
  );
};

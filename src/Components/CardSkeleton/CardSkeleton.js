import React from "react";
import Skeleton from "react-loading-skeleton";
import "./CardSkeleton.css";

export const CardSkeleton = ({ cards }) => {
  return [...Array(cards)].map((_, index) => (
    <div className="cardSkeleton" key={index}>
      <div className="firstRow">
        <Skeleton width={220} height={224} />
      </div>
      <div className="secondRow">
        <Skeleton height={28} count={2} />
      </div>
    </div>
  ));
};

import React, { useEffect, useState } from "react";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";
import { Side } from "../Side/Side";
import "./Recommended.css";

export const Recommended = ({ records }) => {
  return (
    <div className="recommended">
      <Side popper="we recommend" />
      <div className="recomm-records">
        {records ? (
          records
            .sort(() => Math.random() - 0.5)
            .slice(0, 15)
            .map((item) => {
              return (
                <div className="recommended-record" key={item.id}>
                  <div className="recommended-record-img">
                    <img src={item.img} />
                    <div className="recommended-overlay">
                      <p>{item.price}&#8364;</p>
                    </div>
                  </div>
                  <div className="recommended-record-data">
                    <p style={{ fontWeight: "bold" }}>{item.artist}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })
        ) : (
          <div>No items available</div>
        )}
      </div>
    </div>
  );
};

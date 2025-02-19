import React from "react";
import { TopSellers } from "../TopSellers/TopSellers";
import { Recommended } from "../Recommended/Recommended";
import { StoreInfo } from "../StoreInfo/StoreInfo";
import "./Home.css";

export const Home = ({ records }) => {
  return (
    <div className="home">
      <TopSellers records={records} />
      <Recommended records={records} />
      <StoreInfo />
    </div>
  );
};

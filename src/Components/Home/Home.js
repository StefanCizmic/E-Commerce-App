import React, { useEffect, useState } from "react";
import { getRecords } from "../../Util/getRecords";
import { TopSellers } from "./TopSellers/TopSellers";
import { Recommended } from "./Recommended/Recommended";
import { Info } from "./Info/Info";
import "./Home.css";

export const Home = ({ records }) => {
  return (
    <div className="home">
      <TopSellers records={records} />
      <Recommended />
      {/*
      <Info /> */}
    </div>
  );
};

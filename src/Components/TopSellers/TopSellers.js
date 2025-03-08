import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Sidename } from "../Sidename/Sidename";
import { responsive } from "../../Util/responsive";
import "./TopSellers.css";

export const TopSellers = ({ records }) => {
  const navigate = useNavigate();

  const topSellingRecords = useMemo(
    () => records?.filter((record) => record?.topSeller),
    [records]
  );

  const getSingleRecord = (record) => {
    navigate("/single", { state: { record } });
  };

  return (
    <div className="top-sellers">
      <Sidename popper="top&#x2022;sellers" />
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        containerClass="carousel-cont"
        removeArrowOnDeviceType={["desktop", "smallerView"]}
      >
        {topSellingRecords.length > 0 &&
          topSellingRecords.map((topSeller) => {
            return (
              <div
                className="records-carousel"
                key={topSeller?.id}
                onClick={() => getSingleRecord(topSeller)}
              >
                <div className="record">
                  <div className="record-img">
                    <img src={topSeller?.img} />
                  </div>
                  <div className="record-data">
                    <p style={{ fontWeight: "bold" }}>{topSeller?.artist}</p>
                    <p>{topSeller?.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

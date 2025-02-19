import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidename } from "../Sidename/Sidename";
import "./Recommended.css";

export const Recommended = ({ records }) => {
  const navigate = useNavigate();
  const handleRecord = (record) => {
    navigate("/single", { state: { record } });
  };
  return (
    <div className="recommended">
      <Sidename popper="we recommend" />
      <div className="recomm-records">
        <h2>We recommend</h2>
        {records ? (
          records
            .sort(() => Math.random() - 0.5)
            .slice(0, 20)
            .map((item) => {
              return (
                <div
                  className="recommended-record"
                  key={item.id}
                  onClick={() => handleRecord(item)}
                >
                  <div className="recommended-record-img">
                    <img src={item.img} />
                    <div className="recommended-overlay">
                      <div className="label-date-overlay">
                        <p>
                          Release: <br /> {item?.release?.date}
                        </p>
                        <hr />
                        <p>{item?.release?.label}</p>
                      </div>
                      <div className="price-overlay">
                        <p>{item?.price}&#8364;</p>
                      </div>
                    </div>
                  </div>
                  <div className="recommended-record-data">
                    <p style={{ fontWeight: "bold" }}>{item?.artist}</p>
                    <p>{item?.title}</p>
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

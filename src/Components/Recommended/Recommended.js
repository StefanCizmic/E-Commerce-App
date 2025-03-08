import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sidename } from "../Sidename/Sidename";
import "./Recommended.css";

export const Recommended = ({ records }) => {
  const navigate = useNavigate();

  const slicedRecords = useMemo(
    () => records.toSorted(() => Math.random() - 0.5).slice(0, 20),
    [records]
  );

  const getSingleRecord = (record) => {
    navigate("/single", { state: { record } });
  };

  return (
    <div className="recommended">
      <Sidename popper="we&#x2022;recommend" />
      <div className="recomm-records">
        <h2>We recommend</h2>
        {records.length > 0 &&
          slicedRecords.map((item) => {
            return (
              <div
                className="recommended-record"
                key={item.id}
                onClick={() => getSingleRecord(item)}
              >
                <div className="recommended-record-img">
                  <img src={item?.img} />
                  <div className="recommended-overlay">
                    <div className="label-date-overlay">
                      <p>
                        Release: <br /> {item?.release?.date}
                      </p>
                      <hr />
                      <p>{item?.release?.label}</p>
                    </div>
                    <div className="price-overlay">
                      <p>{item?.price}&#36;</p>
                    </div>
                  </div>
                </div>
                <div className="recommended-record-data">
                  <p style={{ fontWeight: "bold" }}>{item?.artist}</p>
                  <p>{item?.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

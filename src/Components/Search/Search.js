import React from "react";
import { Autocomplete } from "@mui/material";
import "./Search.css";

export const Search = ({ filteredRecords, handleRecord }) => {
  return (
    <div className="filtered-records">
      {filteredRecords.map((record) => {
        return (
          <div
            key={record.id}
            className="filtered-record"
            onClick={() => handleRecord(record) }
          >
            <div>
              <img src={record.img}></img>
            </div>
            <div>
              {record.artist} - {record.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

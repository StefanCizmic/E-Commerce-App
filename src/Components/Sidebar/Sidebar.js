import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css";

export const Sidebar = ({
  toggleDrawer,
  isDrawerOpen,
  inputHandler,
  filteredRecords,
  handleRecord,
}) => {
  const drawerContent = (
    <div>
      <FontAwesomeIcon
        className="x-mark"
        onClick={toggleDrawer(false)}
        icon={faXmark}
      />
      <span className="search-form" style={{ marginTop: "5px" }}>
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input
          type="text"
          placeholder="find records"
          style={{ backgroundColor: "#f5f5f5" }}
          onChange={inputHandler}
        />
      </span>
      <Search filteredRecords={filteredRecords} handleRecord={handleRecord}/>
      <ul className="drawer-content">
        {["Home", "Shop", "Newsteller", "Club", "About", "Shipping"].map(
          (item) => (
            <li key={item} onClick={toggleDrawer(false)}>
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
  return (
    <div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: {
              xs: "250px",
              sm: "250px",
              md: "350px",
            },
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "16px",
            },
            backgroundColor: "#f5f5f5",
            padding: "20px 20px",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

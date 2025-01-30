import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { User } from "./Components/Navbar/User/User";
import { Cart } from "./Components/Navbar/Cart/Cart";
import { Home } from "./Components/Home/Home";
import { Shop } from "./Components/Shop/Shop";
import { Newsteller } from "./Components/Newsteller/Newsteller";
import { Club } from "./Components/Club/Club";
import { AboutUs } from "./Components/Navbar/Navigation/AboutUs/AboutUs";
import { ShippingPolicy } from "./Components/Navbar/Navigation/ShippingPolicy/ShippingPolicy";
import { SingleRecord } from "./Components/SingleRecord/SingleRecord";
import { Footer } from "./Components/Footer/Footer";
import { getRecords } from "./Util/getRecords";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const currentRoute = useLocation();
  const navigateTo = useNavigate();
  const [records, setRecords] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (currentRoute.pathname !== "/home") {
      navigateTo("/home");
    }
  }, []);
  useEffect(() => {
    const fetchRecords = async () => {
      const recordsData = await getRecords();
      if (recordsData) {
        setRecords(recordsData);
      }
    };
    fetchRecords();
  }, []);
  console.log(records);
  return (
    <div className="app">
      <Navbar records={records} setIsFocused={setIsFocused}/>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home records={records} />}></Route>
          <Route path="/shop" element={<Shop records={records} />}></Route>
          <Route path="/newsteller" element={<Newsteller />}></Route>
          <Route path="/club" element={<Club />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/shipping" element={<ShippingPolicy />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/single" element={<SingleRecord />}></Route>          
        </Routes>
        {currentRoute.pathname !== "/about" && currentRoute.pathname !== "/user" ? <Footer /> : null}
        </div>
    </div>
  );
};

export default App;

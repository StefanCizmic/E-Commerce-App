import React, { useEffect, useState, createContext } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart } from "./Components/Cart/Cart";
import { Home } from "./Components/Home/Home";
import { Store } from "./Components/Store/Store";
import { Newsteller } from "./Components/Newsteller/Newsteller";
import { Club } from "./Components/Club/Club";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { ShippingPolicy } from "./Components/ShippingPolicy/ShippingPolicy";
import { SingleRecord } from "./Components/SingleRecord/SingleRecord";
import { Footer } from "./Components/Footer/Footer";
import { getRecords } from "./Util/getRecords";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

export const CartContx = createContext();

const App = () => {
  const currentRoute = useLocation();
  const [records, setRecords] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartAnimation, setCartAnimation] = useState(false);
  useEffect(() => {
    const fetchRecords = async () => {
      const recordsData = await getRecords();
      if (recordsData) {
        setRecords(recordsData);
      }
    };
    fetchRecords();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);
  return (
    <div className="app">
      <CartContx.Provider value={setCart}>
        <Navbar records={records} cart={cart} cartAnimation={cartAnimation} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home records={records} />}></Route>
            <Route path="/store" element={<Store records={records} />}></Route>
            <Route path="/newsteller" element={<Newsteller />}></Route>
            <Route path="/club" element={<Club />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/shipping" element={<ShippingPolicy />}></Route>
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            ></Route>
            <Route
              path="/single"
              element={<SingleRecord setCartAnimation={setCartAnimation} />}
            ></Route>
          </Routes>
          {currentRoute.pathname !== "/about" ? <Footer /> : null}
        </div>
      </CartContx.Provider>
    </div>
  );
};

export default App;

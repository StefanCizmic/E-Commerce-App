import React, { useEffect, useState } from "react";
import { Initial } from "./Initial/Initial";
import { FindOutMore } from "./FindOutMore/FindOutMore";
import "./AboutUs.css";

export const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  return (
    <div className={`about-us ${isVisible ? "show" : ""}`}>
      {aboutUs ? (
        <Initial setIsVisible={setIsVisible} setAboutUs={setAboutUs} />
      ) : (
        <FindOutMore />
      )}
    </div>
  );
};

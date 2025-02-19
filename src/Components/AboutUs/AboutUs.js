import React, { useEffect, useState } from "react";
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
        <div className="about-us-initial">
        <p
          className="find-out-more"
          onClick={() => {
            setAboutUs(false);
          }}
        >
          Find out more
        </p>
        <div className="text">
          <h1>
            <em>Harmony Records</em>
          </h1>
          <p>Your ultimate destination for vinyl treasures</p>
        </div>
      </div>
      ) : (
        <div className="find-out-more-content">
      <div className="find-out-more-text">
        <p>
          Harmony Records is your ultimate destination for vinyl lovers and
          music enthusiasts alike. Our mission is to provide a diverse range of
          albums spanning all genres, from timeless classics to the latest hits,
          all in the finest quality pressings. We take great pride in carefully
          curating our collection, ensuring that each vinyl record we offer
          meets the highest standards for sound and authenticity. Whether you're
          an avid collector or someone who simply enjoys the rich, warm tones of
          vinyl, Harmony Records is the perfect place to explore and expand your
          music library. Our store is designed to offer a unique shopping
          experience, where you can find rare gems, discover new artists, and
          reconnect with your favorite albums in a whole new way. Visit us today
          and find the perfect record to add to your collection, or let us help
          you find that special album you've been searching for.
        </p>
      </div>
    </div>
      )}
    </div>
  );
};

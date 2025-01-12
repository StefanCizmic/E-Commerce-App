import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Side } from "../Side/Side";
import "./TopSellers.css";

export const TopSellers = ({ records }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 6,
      slidesToSlide: 3,
    },
    smallerView: {
      breakpoint: {max: 1249, min: 1024},
      items: 5,
      slidesToSlide: 3,
    }
  };
  return (
    <div className="top-sellers">
      <Side popper="top sellers"/>
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        containerClass="carousel-cont"
        removeArrowOnDeviceType={["desktop", "smallerView"]}
      >
        {records ? (
          records.map((item) => {
            if (item.topSeller) {
              return (
                <div className="records-carousel" key={item.id}>
                  <div className="record">
                    <div className="record-img">
                      <img src={item.img} />
                    </div>
                    <div className="record-data">
                      <p style={{ fontWeight: "bold" }}>{item.artist}</p>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div>No items available</div>
        )}
      </Carousel>
    </div>
  );
};

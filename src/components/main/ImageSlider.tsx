import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";
import { SliderData } from "./SliderData";

function ImageSlider() {
  return (
    <section className="slider">
      {/* <BsChevronLeft className="left-arrow" onClick={prevSlide} />
      <BsChevronRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="training image" className="image" />
            )}
          </div>
        );
      })} */}
    </section>
  );
}

export default ImageSlider;

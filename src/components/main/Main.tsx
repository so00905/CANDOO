import * as React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Container from "@mui/material/Container";
import "../../assets/App.css";
import Top from "../Top";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Main() {
  return (
    <>
      <Container className="main-container">
        여기는 메인
        {/* <SimpleImageSlider
          width={"80%"}
          height={"30%"}
          images={SliderData}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        /> */}
      </Container>
    </>
  );
}

export default Main;

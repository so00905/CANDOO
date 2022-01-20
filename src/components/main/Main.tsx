import * as React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Container from "@mui/material/Container";

import Top from "../Top";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Main() {
  return (
    <>
      <div>
        <Container>
          <div>
            <SimpleImageSlider
              width={"50%"}
              height={"30%"}
              images={SliderData}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Main;

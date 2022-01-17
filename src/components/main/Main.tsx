import * as React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Top from "../Top";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Main() {
  return (
    <>
      <div>
        <Container>
          <ImageSlider slides={SliderData} />
        </Container>
      </div>
    </>
  );
}

export default Main;

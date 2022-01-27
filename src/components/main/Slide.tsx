import * as React from "react";
import styled from "styled-components";
import Settings, { DefaultSettingsT, SettingsT } from "./Settings";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Carousel from "react-material-ui-carousel";
import "../../assets/Slide.css";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import "../../assets/App.css";
import { SliderData } from "./SliderData";
import { useState } from "react";

import training01 from "../../images/fitness/training01.jpg";
import training02 from "../../images/fitness/training02.jpg";
import training03 from "../../images/fitness/training03.jpg";
import training04 from "../../images/fitness/training04.jpg";

function Slide() {
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

  return (
    <div>
      <Carousel
        className="carousel-style"
        animation="fade"
        autoPlay={true}
        indicators={false}
        duration={1200}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
        cycleNavigation={true}
        fullHeightHover={true}
        swipe={false}
        // {...settings}
        // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
        // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
        // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

        // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
        // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
        // indicatorContainerProps={{style: {margin: "20px"}}}
        // NextIcon='next'
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

type Item = {
  Name: string;
  Caption: string;
  contentPosition: "left" | "right" | "middle";
  Items: { Name: string; Image: string }[];
};

interface BannerProps {
  item: Item;
  contentPosition: "left" | "right" | "middle";
  length?: number;
}

const Banner = (props: BannerProps) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems: number = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  function startBtn(e: any) {
    window.location.href = "/bulkup";
  }
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton" onClick={startBtn}>
          시작하기
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          {/* <Typography className="MediaCaption">{item.Name}</Typography> */}
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};

const items: Item[] = [
  {
    Name: "정장도 맞춤!안경도 맞춤!신발도 맞춤!",
    Caption: "캔두에서 운동'맞춤'을 시작해보세요",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: training01,
      },
      {
        Name: "iPhone",
        Image: training02,
      },
    ],
  },

  {
    Name: "운동 않화쉐요?",
    Caption:
      "맞춤법이 거슬리시나요? {'\n'} 그렇다면 지금바로 캔두와 함께 맞춤운동을 시작할 때!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: training03,
      },
      {
        Name: "Floral Vase",
        Image: training04,
      },
    ],
  },
];

export default Slide;

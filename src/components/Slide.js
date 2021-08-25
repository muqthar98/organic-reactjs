import React from "react";
import './Slide.css'
import Carousel from "react-material-ui-carousel";
import { makeStyles, Card } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {},
  image: {
    width: "100%",
  },
}));

const bannerData = [
  "https://images.unsplash.com/photo-1536250748881-25d8cc4a285e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=962&q=60",
  "/slide1.jpg",
];

function Slide() {
  const classes = useStyle();
  return (
    <Card>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        className={classes.container}
        StylesProvider
        navButtonsProps={{
          style: {
            color: "#494949",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 0,
            margin: 0,
            width: 50,
          },
        }}
      >
        {bannerData.map((image) => {
          return <img className="image" src={image} alt="" />;
        })}
      </Carousel>
    </Card>
  );
}

export default Slide;

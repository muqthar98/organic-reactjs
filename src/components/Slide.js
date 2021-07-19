import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles, Card } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {},
  image: {
    width: "100%",
    height: 100,
  },
}));

const bannerData = [
  "",
  "//cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slide-organic.jpg?v=1609211529",
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
            backgroundColor: "#FFFFFF",
            borderRadius: 0,
            margin: 0,
            width: 50,
          },
        }}
      >
        {bannerData.map((image) => {
          return <img src={image} />;
        })}
      </Carousel>
    </Card>
  );
}

export default Slide;

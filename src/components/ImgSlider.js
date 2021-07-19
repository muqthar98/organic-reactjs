import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            src="//cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slide-organic_e543f5e9-4f27-4f0e-92b4-80f215353f6f.jpg?v=1609301399"
            alt=""
          />
          <Content>Organic</Content>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="//cdn.shopify.com/s/files/1/0421/6153/7180/files/img-slide-organic.jpg?v=1609211529"
            alt=""
          />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 2px;
  background-repeat:no-repeat & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Content = styled.h1`
  font-weight: 600px;
  position: absolute;
  top: 30%;
  left: 10%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: black;
  font-size: 46px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  text-transform: uppercase;
`;

export default ImgSlider;

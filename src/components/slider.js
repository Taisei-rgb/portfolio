import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <img className="photo__contents" src={require("../images/cherry_blossom.JPG")} />
        <img className="photo__contents" src={require("../images/cosmos.JPG")} />
        <img className="photo__contents" src={require("../images/purple_flower.JPG")} />
        <img className="photo__contents" src={require("../images/yellow_flower.JPG")} />
        <img className="photo__contents" src={require("../images/cat1.JPG")} />
      </Slider>
    );
  }

  export default SimpleSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// My styles
import "./Slider.css";

const SliderComponent = props => {
    const settings = {
        dots: props.dots ? true : false,
        infinite: props.infinite ? true : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: props.autoplay ? true : false,
        speed: props.speed ? props.speed : 400,
        autoplaySpeed: props.autoplaySpeed ? props.autoplaySpeed : 2000,
        cssEase: "linear",
        appendDots: dots => (
            <div
                //'Id' is because we don't have enough priority to use className
                id="Dots__Wrapper"
            >
                <ul id="Dots__List"> {dots} </ul>
            </div>
        )
    };
    return (
        <div className="Slider">
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div >
    );
};

export default SliderComponent;
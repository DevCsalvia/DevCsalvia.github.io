import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// My styles
import "./Slider.css";

const slider = props => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 2000,
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
    /*Type of slide to put into slider block:
        <div className="Slide Slide_1">
            <div className="Slide__Content">
                COMFORT IS WHAT DEFINES US
                <h3>
                    #IAMRUNNER!
                </h3>
            </div>
        </div>
    */
    return (
        <div className="Slider">
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div >
    );
};

export default slider;
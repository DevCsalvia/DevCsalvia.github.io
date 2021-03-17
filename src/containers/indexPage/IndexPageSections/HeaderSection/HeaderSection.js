import Slider from '../../../../components/UI/Slider/Slider';

// My components
import Button from '../../../../components/UI/Button/Button';

// My css
import "./HeaderSection.css";

const HeaderSection = props => (
    <section>
        <Slider dots={true} infinite={true} autoplay={false}>
            <div className="Header-Section__Slide Header-Section__Slide_1">
                <div className="Header-Section__Slide__Img">
                    <img src="./images/IndexPage/SliderImages/item_2.jpg" alt="" />
                </div>
                <div className="Header-Section__Slide__Content">
                    <span>COMFORT IS WHAT <br /> DEFINES US</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Header-Section__Slide Header-Section__Slide_2">
                <div className="Header-Section__Slide__Img">
                    <img src="./images/IndexPage/SliderImages/item_3.2.jpg" alt="" />
                </div>
                <div className="Header-Section__Slide__Content">
                    <span>MORE THAN <br /> INFLUENCERS</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Header-Section__Slide Header-Section__Slide_3">
                <div className="Header-Section__Slide__Img">
                    <img src="./images/IndexPage/SliderImages/item_7.1.jpg" alt="" />
                </div>
                <div className="Header-Section__Slide__Content">
                    <span>NEW <br /> ARRIVALS</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Header-Section__Slide Header-Section__Slide_4">
                <div className="Header-Section__Slide__Img">
                    <img src="./images/IndexPage/SliderImages/item_9.1.jpg" alt="" />
                </div>
                <div className="Header-Section__Slide__Content">
                    <span>ARTISTS FOR <br /> HUMANITY</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
        </Slider>
    </section>

);

export default HeaderSection;
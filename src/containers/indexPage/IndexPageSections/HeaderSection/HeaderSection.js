import Slider from '../../../../components/UI/Slider/Slider';

// My components
import Button from '../../../../components/UI/Button/Button';

// My css
import "./HeaderSection.css";

const HeaderSection = props => (
    <section>
        <Slider>
            <div className="Slide Slide_1">
                <div className="Slide__Content">
                    <span>COMFORT IS WHAT DEFINES US</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button addClass="Button" link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Slide Slide_2">
                <div className="Slide__Content">
                    <span>COMFORT IS WHAT DEFINES US</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button addClass="Button" link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Slide" id="Slide_3">
                <div className="Slide__Content">
                    <span>COMFORT IS WHAT DEFINES US</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button addClass="Button" link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
            <div className="Slide Slide_4">
                <div className="Slide__Content">
                    <span>COMFORT IS WHAT DEFINES US</span>
                    <h3>
                        #IAMRUNNER
                    </h3>
                    <Button addClass="Button" link="#">
                        Watch Now
                        </Button>
                </div>
            </div>
        </Slider>
    </section>

);

export default HeaderSection;
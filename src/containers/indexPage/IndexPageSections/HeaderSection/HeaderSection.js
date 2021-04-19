
import Slider from '../../../../components/UI/Slider/Slider';

// My components
import HeaderSectionSlide from './HeaderSectionSlide/HeaderSectionSlide';

// My css
import "./HeaderSection.css";

const HeaderSection = props => {
    const sliderData = [
        { imgUrl: 'item_2.jpg', title: <span>COMFORT IS WHAT <br /> DEFINES US</span>, hashTag: '#IAMRUNNER', btnTitle: 'Watch Now' },
        { imgUrl: 'item_3.2.jpg', title: <span>MORE THAN <br /> INFLUENCERS</span>, hashTag: '#IAMRUNNER', btnTitle: 'Watch Now' },
        { imgUrl: 'item_7.1.jpg', title: <span>NEW <br /> ARRIVALS</span>, hashTag: '#IAMRUNNER', btnTitle: 'Watch Now', addClass: 'Header-Section__Slide_3' },
        { imgUrl: 'item_9.1.jpg', title: <span>ARTISTS FOR <br /> HUMANITY</span>, hashTag: '#IAMRUNNER', btnTitle: 'Watch Now' }
    ];
    // Array where we will store slider items html
    const slidesMarkup = [];
    sliderData.forEach((item, index) => {
        slidesMarkup.push(<HeaderSectionSlide addClass={item.addClass} key={index} imgUrl={item.imgUrl} title={item.title} hashTag={item.hashTag} btnTitle={item.btnTitle} />);
    });

    return (
        <section>
            <Slider dots={true} infinite={true} autoplay={false}>
                {slidesMarkup}
            </Slider>
        </section>);
};

export default HeaderSection;
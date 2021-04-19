import Button from '../../../../../components/UI/Button/Button';

const HeaderSectionSlide = props =>
    <div className={`Header-Section__Slide${props.addClass ? ' ' + props.addClass : ''}`}>
        <div className="Header-Section__Slide__Img">
            <img src={`./images/IndexPage/SliderImages/${props.imgUrl}`} alt="SLIDE" />
        </div>
        <div className="Header-Section__Slide__Content">
            <span>{props.title}</span>
            <h3>
                {props.hashTag}
            </h3>
            <Button link="#">
                {props.btnTitle}
            </Button>
        </div>
    </div>;

export default HeaderSectionSlide;
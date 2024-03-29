import Aux from '../../../hoc/Auxil/Auxil';

// My css
import './NavigationItems.css';

// My components
import NavigationItem from './NavigationItem/NavigationItem';

// My icons
import { ReactComponent as HeartOSvg } from '../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../../assets/SVG-Icons/heart.svg';
import { ReactComponent as UserSvg } from '../../../assets/SVG-Icons/user.svg';
import { ReactComponent as BoxSvg } from '../../../assets/SVG-Icons/dropbox.svg';

const NavigationItems = (props) => {

    const scrollBtnHandler = (e, sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ block: "center", behavior: 'smooth' });
        }
    }

    return (
        <Aux>
            <ul className="Navigation__items">
                <NavigationItem link="/">Main</NavigationItem>
                <NavigationItem link="/products">Products</NavigationItem>
                <NavigationItem link="/" clicked={(e) => { scrollBtnHandler(e, '#AboutSection') }}>About</NavigationItem>
                <NavigationItem link="/" clicked={(e) => { scrollBtnHandler(e, '#ContactSection') }}>Contact</NavigationItem>

            </ul>
            <ul className="Navigation__icons">
                <li onClick={props.likeBtnClicked}>
                    {props.likeIconState ? <HeartSvg /> : <HeartOSvg />}
                </li>
                <NavigationItem link="/account"><UserSvg /></NavigationItem>
                <li onClick={props.cartIconClicked}><BoxSvg /></li>
            </ul>
        </Aux>
    )
};

export default NavigationItems;
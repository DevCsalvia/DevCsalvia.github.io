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

const NavigationItems = (props) => (
    <Aux>
        <ul className="Navigation__items">
            <NavigationItem link="/">Main</NavigationItem>
            <NavigationItem link="/products">Products</NavigationItem>
            <NavigationItem link="#">About</NavigationItem>
            <NavigationItem link="#">Contact</NavigationItem>
        </ul>
        <ul className="Navigation__icons">
            <li onClick={props.likeBtnClicked}>
                {props.likeIconState ? <HeartSvg /> : <HeartOSvg />}
            </li>
            <NavigationItem link="/auth"><UserSvg /></NavigationItem>
            <li onClick={props.cartIconClicked}><BoxSvg /></li>
        </ul>
    </Aux>
);

export default NavigationItems;
import Aux from '../../../hoc/Auxil/Auxil';

// My css
import './NavigationItems.css';

// My components
import NavigationItem from './NavigationItem/NavigationItem';

// My icons
import { ReactComponent as HeartSvg } from '../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as SearchSvg } from '../../../assets/SVG-Icons/search.svg';
import { ReactComponent as UserSvg } from '../../../assets/SVG-Icons/user.svg';
import { ReactComponent as BoxSvg } from '../../../assets/SVG-Icons/dropbox.svg';

const navigationItems = (props) => (
    <Aux>
        <ul className="Navigation__items">
            <NavigationItem link="#">Costumes</NavigationItem>
            <NavigationItem link="#">Sneakers</NavigationItem>
            <NavigationItem link="#">About</NavigationItem>
            <NavigationItem link="#">Contact</NavigationItem>
        </ul>
        <ul className="Navigation__icons">
            <NavigationItem link="#"><HeartSvg /></NavigationItem>
            <NavigationItem link="#"><SearchSvg /></NavigationItem>
            <NavigationItem link="#"><UserSvg /></NavigationItem>
            <NavigationItem link="#"><BoxSvg /></NavigationItem>
        </ul>
    </Aux>
);

export default navigationItems;
import Aux from '../../../hoc/Auxil/Auxil';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <Aux>
        <ul className="Navigation__items">
            <NavigationItem link="#">Costumes</NavigationItem>
            <NavigationItem link="#">Sneakers</NavigationItem>
            <NavigationItem link="#">About</NavigationItem>
            <NavigationItem link="#">Contact</NavigationItem>
        </ul>
        <ul className="Navigation__icons">
            <NavigationItem link="#">icon1</NavigationItem>
            <NavigationItem link="#">icon2</NavigationItem>
            <NavigationItem link="#">icon3</NavigationItem>
            <NavigationItem link="#">icon4</NavigationItem>
        </ul>
    </Aux>
);

export default navigationItems;
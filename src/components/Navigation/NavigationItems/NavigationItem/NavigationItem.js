import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => (
    <li>
        <NavLink
            exact={props.exact}
            to={props.link}
            activeClassName="active">{props.children}</NavLink>
    </li>
);

export default navigationItem;
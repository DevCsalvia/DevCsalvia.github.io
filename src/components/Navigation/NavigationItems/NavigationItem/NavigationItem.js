import { Link } from 'react-router-dom';

const NavigationItem = (props) => (
    <li>
        <Link
            exact={props.exact}
            to={props.link}
            onClick={props.clicked}>{props.children}</Link>
    </li>
);

export default NavigationItem;
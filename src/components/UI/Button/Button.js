import { NavLink } from 'react-router-dom';

import './Button.css';

const Button = props => {
    return (
        <div className={'Button ' + props.addClass}>
            <NavLink
                exact={props.exact}
                to={props.link}>{props.children}</NavLink>
        </div>

    );
}

export default Button;
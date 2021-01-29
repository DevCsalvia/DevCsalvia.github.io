import { NavLink } from 'react-router-dom';

import classes from './Button.module.css';

const button = props => {
    return (
        <div className={classes.Button + ' ' + props.addClass}>
            <NavLink
                exact={props.exact}
                to={props.link}>{props.children}</NavLink>
        </div>

    );
}

export default button;
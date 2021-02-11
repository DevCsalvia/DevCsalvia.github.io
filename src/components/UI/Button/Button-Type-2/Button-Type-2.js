import { NavLink } from 'react-router-dom';

import classes from './Button-Type-2.module.css';

const button = props => {
    return (
        <div className={classes.Button + ' ' + props.addClass + ' ' + 'Button_Component'}>
            <NavLink
                exact={props.exact}
                to={props.link}>{props.children}</NavLink>
        </div>

    );
}

export default button;
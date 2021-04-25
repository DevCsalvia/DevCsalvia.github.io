import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
    return (
        <button disabled={props.disabled} style={{ padding: props.link ? 0 : '' }} className={`Button${(props.addClass) ? ' ' + props.addClass : ''}`}>
            {props.link ? <Link
                exact={props.exact}
                to={props.link}>{props.children}</Link> : props.children}
        </button>

    );
}

export default Button;
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const Button = props => {
    const addClassesArr = [];
    if (props.addClass) {
        props.addClass.split(' ').forEach(addClass => {
            switch (addClass) {
                case 'Button--Border-Black': addClassesArr.push(classes.ButtonBorder_Black); break;
                case 'Button--Black': addClassesArr.push(classes.ButtonBlack); break;
                default: addClassesArr.push(addClass);
            }
        });
    };

    return (
        <button
            disabled={props.disabled}
            style={{ padding: props.link ? 0 : '' }}
            onClick={props.clicked}
            className={`${classes.Button} ${addClassesArr.join(' ')}${props.disabled ? ' ' + classes.Btn_Disabled : ''}`}>
            {props.link ? <Link
                className={`${props.disabled ? 'disabled-link' : ''}`}
                exact={props.exact}
                to={props.link}>{props.children}</Link> : props.children}
        </button>

    );
}

export default Button;
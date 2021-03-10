import classes from './InputField.module.css';

import { ReactComponent as Arrow } from '../../../assets/SVG-Icons/long-arrow-right.svg';

const inputField = props => (
    <div className={classes.Input_Wrapper}>
        <input
            type="email"
            className={classes.Input}
            placeholder={props.placeholder}
            required="required" />
        <button type="button" className={classes.Button}>
            <Arrow />
        </button>
    </div>
);

export default inputField;
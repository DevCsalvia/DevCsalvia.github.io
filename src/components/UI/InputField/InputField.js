import classes from './InputField.module.css';

const InputField = props => <input className={classes.input_field} type={props.type} placeholder={props.placeholder} />

export default InputField;
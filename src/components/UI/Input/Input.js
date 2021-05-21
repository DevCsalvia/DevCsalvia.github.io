import classes from './Input.module.css';

const Input = props => {
    let inputElement = null;

    const addClassesArr = [];
    if (props.addClasses) {
        props.addClasses.split(' ').forEach(addClass => {
            switch (addClass) {
                case 'input_fieldBlackBorder': addClassesArr.push(classes.Input_FieldBlackBorder); break;
                case 'input_NotValid': addClassesArr.push(classes.Input_NotValid); break;
                default: break;
            }
        });
    };

    switch (props.elementType) {
        case ('textarea'):
            inputElement = <textarea
                className={classes.join(' ')}
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed} />;
            break;

        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    )}
                </select>
            );
            break;

        default:
            inputElement = <input
                className={classes.Input_Field + ' ' + addClassesArr.join(' ')}
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder}
                {...props.elementConfig} />
    }

    return (inputElement);
}

export default Input;
import classes from './Separator.module.css';

const Separator = props => <div className={classes.Separator + ' ' + props.addClasses}>{props.children}</div>

export default Separator;
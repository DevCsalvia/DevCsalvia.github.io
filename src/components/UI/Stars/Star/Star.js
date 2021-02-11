import classes from './Star.module.css';
import { ReactComponent as StarSvg } from '../../../../assets/SVG-Icons/star.svg';

const star = props => (
    <div className={classes.Star}>
        <StarSvg />
    </div>
);

export default star;
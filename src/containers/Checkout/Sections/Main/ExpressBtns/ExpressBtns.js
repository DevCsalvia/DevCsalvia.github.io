import classes from './ExpressBtns.module.css';

// Logos
import { ReactComponent as PaypalLogo } from '../../../../../assets/SVG-Icons/paypal.svg';
import { ReactComponent as GooglePayLogo } from '../../../../../assets/SVG-Icons/googlepay.svg';
import { ReactComponent as MastercardLogo } from '../../../../../assets/SVG-Icons/mastercard.svg';
import { ReactComponent as QiwiLogo } from '../../../../../assets/SVG-Icons/qiwi.svg';

const ExpressBtns = props => <div className={classes.CheckoutMain__express}>
    <div className={classes.CheckoutMain__express_title}>Express checkout</div>
    <div className={classes.CheckoutMain__express__buttons_wrapper}>
        <div><PaypalLogo /></div>
        <div><GooglePayLogo /></div>
        <div><MastercardLogo /></div>
        <div><QiwiLogo /></div>
    </div>
</div>;

export default ExpressBtns;
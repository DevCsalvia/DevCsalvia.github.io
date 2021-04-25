import { useHistory } from 'react-router-dom';

import classes from './MainContent.module.css';

import Button from '../../../../../components/UI/Button/Button';
import InputField from '../../../../../components/UI/InputField/InputField';
// Angle left svg
import { ReactComponent as LeftAngle } from '../../../../../assets/SVG-Icons/angle-left.svg';

const MainContent = props => {
    const history = useHistory();
    return (<div className={classes.CheckoutMain__content}>
        <div className={classes.CheckoutMain__shippingAddress}>
            <h2 className={classes.CheckoutMain__shippingAddress_header}>
                Shipping address / Contact data
        </h2>
            <form className={classes.CheckoutMain__shippingAddress_form}>
                <div>
                    <InputField type="text" placeholder="First name" />
                    <InputField type="text" placeholder="Second name" />
                </div>
                <InputField type="text" placeholder="Company (optional)" />
                <InputField type="text" placeholder="Address" />
                <InputField type="text" placeholder="Apartment, suite, etc. (optional)" />
                <InputField type="text" placeholder="City" />
                <div>
                    <InputField type="text" placeholder="Country/Region" />
                    <InputField type="text" placeholder="ZIP code" />
                </div>
                <InputField type="text" placeholder="Phone" />
                <div className={classes.CheckoutMain__shippingAddress_form__btns_wrapper}>
                    <span onClick={() => history.goBack()}><LeftAngle />Go Back</span>
                    <Button addClass="Button--Black"><span style={{ textTransform: 'capitalize' }}>Make order</span></Button>
                </div>
            </form>
        </div>
    </div>);
};

export default MainContent;
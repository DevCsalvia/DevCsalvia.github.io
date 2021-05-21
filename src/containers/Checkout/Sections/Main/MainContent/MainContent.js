// Classes
import classes from './MainContent.module.css';

// Main components
import MainForm from './MainForm/MainForm';

const MainContent = props => {
    // const history = useHistory(); // To go back
    return (<div className={classes.CheckoutMain__content}>
        <div className={classes.CheckoutMain__shippingAddress}>
            <h2 className={classes.CheckoutMain__shippingAddress_header}>
                Shipping address / Contact data
        </h2>
            <MainForm />
        </div>
    </div>);
};

export default MainContent;

// onClick={() => history.goBack()}
import classes from './Checkout.module.css';

// Sections
import Main from './Sections/Main/Main';
import Sidebar from './Sections/Sidebar/Sidebar';

const Checkout = props => {
    return (
        <div className={classes.Checkout}>
            <div className={classes.Checkout__Content}>
                <Main />
                <Sidebar />
            </div>
        </div>
    )
}

export default Checkout;
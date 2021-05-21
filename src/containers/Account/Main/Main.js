import classes from './Main.module.css';

// Main content components
import OrdersList from './Orders/OrdersList';

const Main = props => {
    return (
        <div className={classes.Main}>
            <OrdersList />
        </div>
    );
};

export default Main;
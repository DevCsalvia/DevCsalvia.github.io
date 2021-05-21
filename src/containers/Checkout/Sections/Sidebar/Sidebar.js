import { useSelector } from 'react-redux';

import classes from './Sidebar.module.css';

// Components
import InputField from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';
import ProductsList from './ProductsList/ProductsList';

const Sidebar = props => {
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <section className={classes.Checkout__sidebar}>
            <div className={classes.Checkout__sidebar__content}>
                <ProductsList />
                <div className={classes.Checkout__sidebar__content__discount}>
                    <form>
                        <InputField type="text" placeholder="Gift card or discount code" />
                        <Button addClass="Button--Black">Apply</Button>
                    </form>
                </div>
                <div className={classes.Checkout__sidebar__content__idmeShopify}>
                    <p style={{ wordWrap: 'auto' }}>
                        Government Employees, Hospital Employees, Medical Providers, Military, Nurses, First Responders, and Teachers receive a discount
                    </p>
                    <img src="./images/verify_img.png" alt="VERIFY" />
                </div>
                <div className={classes.Checkout__sidebar__content__total}>
                    <span>Total</span>
                    <span><span>RUB</span> ₽{Number(totalPrice).toFixed(2)}</span>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;
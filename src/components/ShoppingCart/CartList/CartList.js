import { useSelector } from 'react-redux';

import classes from './CartList.module.css';

// UI components
import Loader from '../../UI/Loader/Loader';

import CartListItem from './CartListItem/CartListItem';

const CartList = props => {
    const items = props.cartItemsData;

    // For Loading
    const loading = useSelector(state => state.cart.cartLoading);

    let cartItemsMarkup = '';
    cartItemsMarkup = <li className={classes.ShoppingCart__List__Empty}>No Items Yet</li>;

    if (loading) {
        cartItemsMarkup = <Loader local={true} />
    } else if (items) {
        cartItemsMarkup = Object.keys(items).reverse().map(key => {
            return (<CartListItem
                key={key}
                id={key}
                itemData={items[key]}
                cartVisibilityRemove={props.cartVisibilityRemove} />);
        });
    }

    return (
        <ul className={classes.ShoppingCart__List}>
            {cartItemsMarkup}
            <li className={classes.ShoppingCart__List__Continue_Btn}>
                <span onClick={props.cartVisibilityRemove}>CONTINUE SHOPPING</span>
            </li>
        </ul>
    );
};

export default CartList;
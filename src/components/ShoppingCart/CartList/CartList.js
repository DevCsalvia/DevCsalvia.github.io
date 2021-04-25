import { useEffect } from 'react';

import classes from './CartList.module.css';

import CartListItem from './CartListItem/CartListItem';

const CartList = props => {
    const items = props.cartItemsData;
    let subtotalSum = 0;
    const cartItemsMarkup = Object.keys(items).reverse().map(key => {
        subtotalSum += +items[key].price * +items[key].amount;
        return (<CartListItem
            key={key}
            id={key}
            itemData={items[key]}
            subtotal={props.subtotal}
            setSubtotal={props.setSubtotal}
            cartVisibilityRemove={props.cartVisibilityRemove} />);
    });

    useEffect(() => {
        props.setSubtotal(subtotalSum);
    }, [subtotalSum]);

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
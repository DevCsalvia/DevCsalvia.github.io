import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import * as actions from '../../../../../store/actions/index';

import classes from './ProductsList.module.css';

// Component
import ListItem from './ListItem/ListItem';

const ProductsList = props => {
    const dispatch = useDispatch();

    // get data from redux
    const checkoutCartData = useSelector(state => state.cart.cartData);

    ////////////////////////////////////////////////////////////////
    // INIT CART ITEMS FROM DATABASE
    const onInitCartItems = useCallback(() => {
        dispatch(actions.initCartItems())
    }, [dispatch]);

    useEffect(() => {
        onInitCartItems();
    }, [onInitCartItems]);

    ////////////////////////////////////////////////////////////////
    // Create list items markup
    let sum = 0;
    const listItemsMarkup = Object.values(checkoutCartData).map((item, index) => {
        sum += +item.price * +item.amount;
        return (<ListItem
            key={index}
            itemData={item}
        />);
    });

    useEffect(() => {
        props.setTotal(sum);
    }, [sum]);

    return (<div className={classes.Products_list__wrapper}>
        <ul className={classes.Products_list}>
            {listItemsMarkup}
        </ul>
    </div>);
};

export default ProductsList;
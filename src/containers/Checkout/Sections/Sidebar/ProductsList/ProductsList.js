import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import * as actions from '../../../../../store/actions/index';

// UI Components
import Loader from '../../../../../components/UI/Loader/Loader';

import classes from './ProductsList.module.css';

// Component
import ListItem from './ListItem/ListItem';

const ProductsList = props => {
    const dispatch = useDispatch();

    // get data from redux
    const checkoutCartData = useSelector(state => state.cart.cartData);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);

    ////////////////////////////////////////////////////////////////
    // INIT CART ITEMS FROM DATABASE
    const onInitCartItems = useCallback(() => {
        dispatch(actions.initCartItems(token, userId))
    }, [dispatch, token, userId]);

    useEffect(() => {
        onInitCartItems();
    }, [onInitCartItems]);

    ////////////////////////////////////////////////////////////////
    // Create list items markup
    let listItemsMarkup = <Loader />;
    if (checkoutCartData) {
        listItemsMarkup = Object.values(checkoutCartData).map((item, index) => {
            return (<ListItem
                key={index}
                itemData={item}
            />);
        });

    }

    return (<div className={classes.Products_list__wrapper}>
        <ul className={classes.Products_list}>
            {listItemsMarkup}
        </ul>
    </div>);
};

export default ProductsList;
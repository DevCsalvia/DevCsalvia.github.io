import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from '../../../../axios-orders';

import * as actions from '../../../../store/actions/index';

import classes from './CartListItem.module.css';

const CartListItem = props => {
    ///////////////////////////////////////////////////////////////
    // Assign item var to itemData
    const item = props.itemData;

    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    ////////////////////////////////////////////////////////////////
    // Increase/Decrease amount of items in cart handler 
    const changeAmountOfItemHandler = (price, type) => {
        switch (type) {
            case 'increase': {
                if (item.amount >= 100) break;
                dispatch(actions.clearCartData());
                dispatch(actions.cartItemAmountChange('inc', item.amount, props.id));
                break;
            }
            case 'decrease': {
                if (item.amount <= 1) break;
                dispatch(actions.clearCartData());
                dispatch(actions.cartItemAmountChange('dec', item.amount, props.id));
                break;
            }
            default: break;
        }
    }

    ///////////////////////////////////////////////////////////////////
    // Removing item from the cart
    const removeItemBtnHandler = (e, id) => {
        e.preventDefault();
        dispatch(actions.removeCartItem(id));
    }

    return (
        <li className={classes.ShoppingCart__Product}>
            <div className={classes.ShoppingCart__Product__Image}>
                <Link
                    to={{
                        pathname: `/products/${item.id}`,
                        search: `category=${item.category}`
                    }}
                    onClick={props.cartVisibilityRemove}>
                    <img src={`../images/ProductsPage/img/${item.category + '/' + item.imgUrl.split(' ')[0]}`} alt="Product" />
                </Link>
            </div>
            <div className={classes.ShoppingCart__Product__Content}>
                <Link
                    to={{
                        pathname: `/products/${item.id}`,
                        search: `category=${item.category}`
                    }}
                    onClick={props.cartVisibilityRemove}
                    className={classes.ShoppingCart__Product__Title}>
                    {item.name}
                </Link>
                <span className={classes.ShoppingCart__Product_Remove} onClick={(e) => removeItemBtnHandler(e, props.id)}></span>
                <span className={classes.ShoppingCart__Product__Description}>
                    {item.title} | {item.size}
                </span>
                <div className={classes.ShoppingCart__Product__Price_Wrapper}>
                    <div className={classes.ShoppingCart__Product__Price}>₽ {item.price ? Number(item.price).toFixed(2) : ''} RUB</div>
                    <div className={classes.ShoppingCart__Product__Amount}>
                        <span onClick={() => changeAmountOfItemHandler(item.price, 'decrease')}>
                            -
                    </span>
                        <span>
                            {item.amount}
                        </span>
                        <span onClick={() => changeAmountOfItemHandler(item.price, 'increase')}>
                            +
                    </span>
                    </div>
                </div>
            </div>
        </li>);
};

export default withRouter(CartListItem);
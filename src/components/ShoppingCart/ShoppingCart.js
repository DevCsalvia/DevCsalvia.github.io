import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxil/Auxil';

import './ShoppingCart.css';

// Components
import Button from '../UI/Button/Button';
import Backdrop from '../UI/Backdrop/Backdrop';
import CartList from './CartList/CartList';

const ShoppingCart = (props) => {
    ///////////////////////////////////////////////////////////////////
    // GETTING CART DATA FROM FIREBASE
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    const cartVisibility = useSelector(state => state.cart.cartVisibility);
    const cartItems = useSelector(state => state.cart.cartData);
    let subTotal = useSelector(state => state.cart.totalPrice);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);

    if (!cartItems) {
        subTotal = 0;
    }

    /* Cart Functionality useCallback is used to not to recreate function inside*/
    const onInitCart = useCallback(() => {
        dispatch(actions.initCartItems(token, userId));
    }, [dispatch, token, userId]);

    useEffect(() => {
        if (cartVisibility && token && userId) {
            onInitCart();
        }
    }, [onInitCart, cartVisibility, token, userId]);

    return (
        <Aux>
            <Backdrop show={cartVisibility} clicked={() => dispatch(actions.cartVisibilityToggle())} />
            <div className={`shoppingcart__Wrapper${cartVisibility ? ' shoppingcart--Visible' : ''}`}>
                <div className="shoppingcart">
                    <div className="shoppingcart__Heading-Wrapper">
                        <h2 className="shoppingcart__Heading">SHOPPING CART</h2>
                        <span onClick={() => dispatch(actions.cartVisibilityToggle())}>&#8592;</span>
                    </div>
                    <CartList
                        cartItemsData={cartItems}
                        cartVisibilityRemove={() => dispatch(actions.cartVisibilityToggle())} />
                    <p className="shoppingcart__Sum">
                        <span>Subtotal |</span><span>₽ {Number(subTotal).toFixed(2)} RUB</span>
                    </p>
                    <Button
                        disabled={cartItems === null ? true : false}
                        clicked={() => dispatch(actions.cartVisibilityToggle())} link="/checkout"
                        addClass="Button--Black">
                        CHECKOUT
                        </Button>
                    <p className="shoppingcart__Taxes">
                        Shipping And Taxes Are Included
                        </p>
                </div>
            </div>

        </Aux>
    );
}

export default ShoppingCart;
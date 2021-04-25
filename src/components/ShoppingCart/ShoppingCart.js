import React, { useState } from 'react';
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

    const cartItems = useSelector(state => state.cart.cartData);

    /* Cart Functionality useCallback is used to not to recreate function inside*/
    const onInitCart = useCallback(() => {
        dispatch(actions.initCartItems())
    }, [dispatch]);

    useEffect(() => {
        if (props.visible)
            onInitCart();
    }, [onInitCart, props.visible]);


    ///////////////////////////////////////////////////////////////////
    // count subtotal sum
    const [subtotal, setSubtotal] = useState(0);

    return (
        <Aux>
            <Backdrop show={props.visible} clicked={props.cartVisibilityRemove} />
            <div className={`shoppingcart__Wrapper${props.visible ? ' shoppingcart--Visible' : ''}`}>
                <div className="shoppingcart">
                    <div className="shoppingcart__Heading-Wrapper">
                        <h2 className="shoppingcart__Heading">SHOPPING CART</h2>
                        <span onClick={props.cartVisibilityRemove}>&#8592;</span>
                    </div>
                    <CartList
                        cartItemsData={cartItems}
                        subtotal={subtotal}
                        setSubtotal={setSubtotal}
                        cartVisibilityRemove={props.cartVisibilityRemove} />
                    <p className="shoppingcart__Sum">
                        <span>Subtotal |</span><span>₽ {Number(subtotal).toFixed(2)} RUB</span>
                    </p>
                    <Button link="/checkout" addClass="Button--Black">CHECKOUT</Button>
                    <p className="shoppingcart__Taxes">
                        Shipping And Taxes Are Included
                        </p>
                </div>
            </div>

        </Aux>
    );
}

export default ShoppingCart;
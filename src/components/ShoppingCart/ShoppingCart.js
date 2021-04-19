import React, { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxil/Auxil';

import './ShoppingCart.css';

// Components
import Button from '../UI/Button/Button';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import Backdrop from '../UI/Backdrop/Backdrop';

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
    // Removing item from cart
    const removeItemBtnHandler = (e, id) => {
        e.preventDefault();
        dispatch(actions.removeCartItem(id));
    }

    ////////////////////////////////////////////////////////////////
    // Increase/Decrease amount of items in cart handlers
    const changeAmountOfItemHandler = (price, type) => {
        switch (type) {
            case 'increase': setSubtotal(subtotal + price); break;
            case 'decrease': setSubtotal(subtotal - price); break;
            default: break;
        }
    }

    ///////////////////////////////////////////////////////////////////
    // count subtotal sum in first render
    const [subtotal, setSubtotal] = useState(0);
    const cartItemsMarkup = [];
    let subtotalSum = 0;
    Object.keys(cartItems).forEach(key => {
        cartItemsMarkup.push(<ShoppingCartItem
            key={key}
            id={key}
            imgUrl={cartItems[key].category + '/' + cartItems[key].imgUrl.split(' ')[0]}
            name={cartItems[key].name}
            title={cartItems[key].title}
            size={cartItems[key].size}
            price={cartItems[key].price}
            changeAmountOfItemHandler={changeAmountOfItemHandler}
            removeItemBtnHandler={removeItemBtnHandler} />);
        subtotalSum += +cartItems[key].price;
    });

    useEffect(() => {
        setSubtotal(subtotalSum);
    }, [subtotalSum]);

    return (
        <Aux>
            <Backdrop show={props.visible} clicked={props.cartVisibilityRemove} />
            <div className={`ShoppingCart__Wrapper${props.visible ? ' ShoppingCart--Visible' : ''}`}>
                <div className="ShoppingCart">
                    <div className="ShoppingCart__Heading-Wrapper">
                        <h2 className="ShoppingCart__Heading">SHOPPING CART</h2>
                        <span onClick={props.cartVisibilityRemove}>&#8592;</span>
                    </div>
                    <ul className="ShoppingCart__List">
                        {cartItemsMarkup}
                        <li className="ShoppingCart__List__Continue-Btn">
                            <span onClick={props.cartVisibilityRemove}>CONTINUE SHOPPING</span>
                        </li>
                    </ul>
                    <p className="ShoppingCart__Sum">
                        <span>Subtotal |</span><span>₽ {subtotal.toFixed(2)} RUB</span>
                    </p>
                    <Button link="/checkout" addClass="Button--Black">CHECKOUT</Button>
                    <p className="ShoppingCart__Taxes">
                        Shipping And Taxes Are Included
                        </p>
                </div>
            </div>

        </Aux>
    );
}

export default ShoppingCart;
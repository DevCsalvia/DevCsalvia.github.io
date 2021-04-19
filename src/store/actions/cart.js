import * as actionTypes from './actionTypes';

export const addItemIntoCart = (itemData) => {
    return {
        type: actionTypes.ADD_ITEM_INTO_CART,
        itemData: itemData
    };
}

export const initCartItems = () => {
    return {
        type: actionTypes.INITIATE_CART_ITEMS
    }
}

export const setCartItems = (cartData) => {
    return {
        type: actionTypes.SET_CART_ITEMS,
        cartData: cartData
    }
}

export const fetchCartItemsFailed = () => {
    return {
        type: actionTypes.FETCH_CART_ITEMS_FAILED
    }
}

export const removeCartItem = (itemId) => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        id: itemId
    }
}
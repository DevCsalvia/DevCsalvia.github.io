import * as actionTypes from './actionTypes';

export const cartVisibilityToggle = () => {
    return {
        type: actionTypes.CART_VISIBILITY_TOGGLE
    }
}

export const addItemIntoCartStart = () => {
    return {
        type: actionTypes.ADD_ITEM_INTO_CART_START
    }
}

export const addItemIntoCartSuccess = () => {
    return {
        type: actionTypes.ADD_ITEM_INTO_CART_SUCCESS
    }
}

export const addItemIntoCart = (itemData, token, userId) => {
    return {
        type: actionTypes.ADD_ITEM_INTO_CART,
        itemData: itemData,
        token: token,
        userId: userId
    };
}

export const initCartItems = (token, userId) => {
    return {
        type: actionTypes.INITIATE_CART_ITEMS,
        token: token,
        userId: userId
    }
}

export const fetchCartItemsStart = () => {
    return {
        type: actionTypes.FETCH_CART_ITEMS_START
    }
}

export const fetchCartItemsSuccess = () => {
    return {
        type: actionTypes.FETCH_CART_ITEMS_SUCCESS
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

export const removeCartItem = (itemId, token, userId) => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        id: itemId,
        token: token,
        userId: userId
    }
}

export const cartItemAmountChange = (changeType, prevAmount, id, token, userId) => {
    return {
        type: actionTypes.CART_ITEM_AMOUNT_CHANGE,
        changeType: changeType,
        prevAmount: prevAmount,
        itemId: id,
        token: token,
        userId: userId
    }
}

export const clearCartData = () => {
    return {
        type: actionTypes.CLEAR_CART_DATA
    }
}

export const createUserCart = (token, userId) => {
    return {
        type: actionTypes.CREATE_USER_CART,
        token: token,
        userId: userId
    }
}

export const removeUserCart = (token, userId) => {
    return {
        type: actionTypes.REMOVE_USER_CART,
        token: token,
        userId: userId
    }
}
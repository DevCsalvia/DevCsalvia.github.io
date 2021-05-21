import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    cartData: null,
    totalPrice: 0,
    cartVisibility: false,
    loading: false,
    itemAdded: false,
    cartLoading: false
};

// adding Items into cart
const addItemIntoCartStart = (state) => {
    return updateObject(state, { loading: true, itemAdded: false });
}

const addItemIntoCartSuccess = (state) => {
    return updateObject(state, { loading: false, itemAdded: true });
}

const cartVisibilityToggle = (state) => {
    return updateObject(state, { cartVisibility: !state.cartVisibility });
}

// loading cart items
const fetchCartItemsStart = (state) => {
    return updateObject(state, { cartLoading: true });
}

const fetchCartItemsSuccess = (state) => {
    return updateObject(state, { cartLoading: false });
}

// setting items after getting
const setCartItems = (state, action) => {
    const resCartDataObj = Object.values(action.cartData)[0];
    delete resCartDataObj.userId;
    if (
        resCartDataObj === undefined ||
        resCartDataObj === null ||
        (Object.keys(resCartDataObj).length === 0 && resCartDataObj.constructor === Object)) return updateObject(state, { cartData: null });
    let sum = 0;
    Object.values(resCartDataObj).forEach(item => {
        sum += +item.price * +item.amount;
    });

    return updateObject(state, { cartData: resCartDataObj, totalPrice: sum });
}

const clearCartData = (state) => {
    return updateObject(state, { cartData: [] });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CART_VISIBILITY_TOGGLE: return cartVisibilityToggle(state);
        case actionTypes.CLEAR_CART_DATA: return clearCartData(state, action);
        case actionTypes.SET_CART_ITEMS: return setCartItems(state, action);
        case actionTypes.FETCH_CART_ITEMS_START: return fetchCartItemsStart(state);
        case actionTypes.FETCH_CART_ITEMS_SUCCESS: return fetchCartItemsSuccess(state);
        case actionTypes.ADD_ITEM_INTO_CART_START: return addItemIntoCartStart(state);
        case actionTypes.ADD_ITEM_INTO_CART_SUCCESS: return addItemIntoCartSuccess(state);
        default: return state;
    }
};

export default reducer;
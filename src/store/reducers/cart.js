import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    cartData: []
};

const setCartItems = (state, action) => {
    if (action.cartData !== undefined && action.cartData !== null)
        return updateObject(state, { cartData: action.cartData });
    return updateObject(state, { cartData: [] });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CART_ITEMS: return setCartItems(state, action)
        default: return state;
    }
};

export default reducer;
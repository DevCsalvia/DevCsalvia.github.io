import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    itemsArr: [],
    loading: false,
    purchased: false
};

// PURCHASING
const purchaseStart = (state) => {
    return (
        updateObject(state, { loading: true, purchased: false })
    )
}

const purchaseSuccess = (state) => {
    return (
        updateObject(state, { loading: false, purchased: true })
    )
}

const purchaseInit = (state) => {
    return (
        updateObject(state, { purchased: false })
    )
}


// FETCHING
const fetchOrdersStart = (state) => {
    return (
        updateObject(state, { loading: true })
    )
}

const fetchOrdersSuccess = (state, action) => {
    return (
        updateObject(state, { itemsArr: action.itemsArr.reverse(), loading: false })
    )
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.PURCHASE_ITEMS_START: return purchaseStart(state);
        case actionTypes.PURCHASE_ITEMS_SUCCESS: return purchaseSuccess(state);
        case actionTypes.PURCHASE_INIT: return purchaseInit(state);
        default: return state;
    }
};

export default reducer;
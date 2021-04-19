import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: {},
    product: null,
    bestsellers: {},
    errorBestsellerFetch: false,
    errorSectionFetch: false,
    errorProductFetch: false
};

const setProducts = (state, action) => {
    return (
        action.category === 'bestsellers' ?
            updateObject(state, {
                bestsellers: action.products
            })
            : updateObject(state, {
                products: action.products
            })
    );
}

const setProduct = (state, action) => {
    return (
        updateObject(state, {
            product: action.product
        })
    );
}

const removeProduct = (state) => {
    return (
        updateObject(state, {
            product: null
        })
    )
}

const fetchProductsFailed = (state, action) => {
    const updateState = {};
    updateState[`error${action.type}Fetch`] = true;
    updateObject(state, updateState)
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        case actionTypes.SET_PRODUCT: return setProduct(state, action);
        case actionTypes.REMOVE_PRODUCT: return removeProduct(state);
        case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action);
        default: return state;
    }
};

export default reducer;
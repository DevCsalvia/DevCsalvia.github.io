import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    productsObject: {},
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
                productsObject: action.products
            })
    );
}

const clearProductsObject = (state) => {
    return (
        updateObject(state, {
            productsObject: {}
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

const clearProduct = (state) => {
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
        case actionTypes.CLEAR_PRODUCTS_OBJECT: return clearProductsObject(state);
        case actionTypes.SET_PRODUCT: return setProduct(state, action);
        case actionTypes.CLEAR_PRODUCT: return clearProduct(state);
        case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action);
        default: return state;
    }
};

export default reducer;
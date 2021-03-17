import * as actionTypes from './actionTypes';

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    }
}

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}

export const initProducts = () => {
    return {
        type: actionTypes.INITIATE_PRODUCTS
    };
}
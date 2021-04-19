import * as actionTypes from './actionTypes';

export const setProducts = (products, category) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products,
        category: category
    }
}

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}

export const initProducts = (productsCategory) => {
    return {
        type: actionTypes.INITIATE_PRODUCTS,
        category: productsCategory
    };
}

export const initBestsellerProducts = () => {
    return {
        type: actionTypes.INITIATE_BESTSELLER_PRODUCT
    }
}

export const getProduct = (id, category) => {
    return {
        type: actionTypes.GET_PRODUCT,
        productId: id,
        category: category
    };
}

export const setProduct = (product) => {
    return {
        type: actionTypes.SET_PRODUCT,
        product: product
    };
}

export const removeProduct = () => {
    return {
        type: actionTypes.REMOVE_PRODUCT
    }
}
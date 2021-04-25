import * as actionTypes from './actionTypes';

export const initProducts = (productsCategory) => {
    return {
        type: actionTypes.INITIATE_PRODUCTS,
        category: productsCategory
    };
}

export const clearProductsObject = () => {
    return {
        type: actionTypes.CLEAR_PRODUCTS_OBJECT
    }
}

export const initBestsellerProducts = () => {
    return {
        type: actionTypes.INITIATE_BESTSELLER_PRODUCT
    }
}

export const setProducts = (products, category) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products,
        category: category
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

export const clearProduct = () => {
    return {
        type: actionTypes.CLEAR_PRODUCT
    }
}

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initProductsSaga, getProductSaga, initBestsellerProducts } from './product';
import { initCartItems, addItemIntoCart, removeCartItem } from './cart';

export function* watchProducts() {
    yield takeEvery(actionTypes.INITIATE_PRODUCTS, initProductsSaga);
    yield takeEvery(actionTypes.INITIATE_BESTSELLER_PRODUCT, initBestsellerProducts);
    yield takeEvery(actionTypes.GET_PRODUCT, getProductSaga);
}

export function* watchCart() {
    yield takeEvery(actionTypes.INITIATE_CART_ITEMS, initCartItems);
    yield takeEvery(actionTypes.ADD_ITEM_INTO_CART, addItemIntoCart);
    yield takeEvery(actionTypes.REMOVE_CART_ITEM, removeCartItem);
}
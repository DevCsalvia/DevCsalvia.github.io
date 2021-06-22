import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initProductsSaga, getProductSaga, initBestsellerProducts } from './product';
import { initCartItemsSaga, addItemIntoCartSaga, removeCartItemSaga, cartItemAmountChangeSaga, createUserCartSaga } from './cart';
import { purchaseItemsSaga, fetchOrdersSaga } from './order';
import { authUserSaga, logoutSaga, checkAuthTimeoutSaga, authCheckStateSaga } from './auth';


export function* watchProducts() {
    yield takeLatest(actionTypes.INITIATE_PRODUCTS, initProductsSaga);
    yield takeLatest(actionTypes.INITIATE_BESTSELLER_PRODUCT, initBestsellerProducts);
    yield takeLatest(actionTypes.GET_PRODUCT, getProductSaga);
}

export function* watchCart() {
    yield takeLatest(actionTypes.INITIATE_CART_ITEMS, initCartItemsSaga);
    yield takeLatest(actionTypes.ADD_ITEM_INTO_CART, addItemIntoCartSaga);
    yield takeLatest(actionTypes.REMOVE_CART_ITEM, removeCartItemSaga);
    yield takeLatest(actionTypes.CART_ITEM_AMOUNT_CHANGE, cartItemAmountChangeSaga);
    yield takeLatest(actionTypes.CREATE_USER_CART, createUserCartSaga);
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_ITEMS, purchaseItemsSaga);
    yield takeLatest(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export function* watchAuth() {
    yield takeLatest(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}
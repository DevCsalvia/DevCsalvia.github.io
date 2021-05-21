import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initProductsSaga, getProductSaga, initBestsellerProducts } from './product';
import { initCartItemsSaga, addItemIntoCartSaga, removeCartItemSaga, cartItemAmountChangeSaga, createUserCartSaga, removeUserCartSaga } from './cart';
import { purchaseItemsSaga, fetchOrdersSaga } from './order';
import { authUserSaga, logoutSaga, checkAuthTimeoutSaga, authCheckStateSaga } from './auth';


export function* watchProducts() {
    yield takeEvery(actionTypes.INITIATE_PRODUCTS, initProductsSaga);
    yield takeEvery(actionTypes.INITIATE_BESTSELLER_PRODUCT, initBestsellerProducts);
    yield takeEvery(actionTypes.GET_PRODUCT, getProductSaga);
}

export function* watchCart() {
    yield takeEvery(actionTypes.INITIATE_CART_ITEMS, initCartItemsSaga);
    yield takeEvery(actionTypes.ADD_ITEM_INTO_CART, addItemIntoCartSaga);
    yield takeEvery(actionTypes.REMOVE_CART_ITEM, removeCartItemSaga);
    yield takeEvery(actionTypes.CART_ITEM_AMOUNT_CHANGE, cartItemAmountChangeSaga);
    yield takeEvery(actionTypes.CREATE_USER_CART, createUserCartSaga);
    yield takeEvery(actionTypes.REMOVE_USER_CART, removeUserCartSaga);
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_ITEMS, purchaseItemsSaga);
    yield takeLatest(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}
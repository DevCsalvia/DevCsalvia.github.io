import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* purchaseItemsSaga(action) {
    try {
        const token = action.token;
        const userId = action.userId;
        yield put(actions.purchaseItemsStart());
        yield axios.post('/orders.json?auth=' + token, action.order);
        // CLEAR USER CART
        yield put(actions.createUserCart(token, userId));
        yield put(actions.purchaseItemsSuccess());
    } catch (error) {
        console.log(error);
    }
}

// FETCH ORDERS
export function* fetchOrdersSaga(action) {
    try {
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        yield put(actions.fetchOrdersStart());
        let response = yield axios.get('/orders.json' + queryParams);
        let itemsArr = [];
        Object.values(response.data).forEach(item => {
            itemsArr = itemsArr.concat(item.goods);
        });
        yield put(actions.fetchOrdersSuccess(itemsArr));
    } catch (error) {
        console.log(error);
    }
}
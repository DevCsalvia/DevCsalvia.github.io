import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* initCartItemsSaga(action) {
    // Getting Products From DataBase if not put Failed Action
    try {
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        yield put(actions.fetchCartItemsStart());
        const res = yield axios.get('/cart.json' + queryParams);
        yield put(actions.setCartItems(res.data));
        yield put(actions.fetchCartItemsSuccess());
    } catch (error) {
        yield put(actions.fetchCartItemsFailed());
    }
}

export function* addItemIntoCartSaga(action) {
    action.itemData.amount = 1;
    yield put(actions.addItemIntoCartStart());
    yield axios.post('/cart/' + action.userId + '.json?auth=' + action.token, action.itemData);
    yield put(actions.addItemIntoCartSuccess());
}

export function* removeCartItemSaga(action) {
    yield put(actions.fetchCartItemsStart());
    yield axios.delete('/cart/' + action.userId + '/' + action.id + '.json?auth=' + action.token);
    yield put(actions.initCartItems(action.token, action.userId));
}

export function* cartItemAmountChangeSaga(action) {
    try {
        yield put(actions.fetchCartItemsStart());
        switch (action.changeType) {
            case 'inc': yield axios.patch(`/cart/${action.userId}/${action.itemId}.json?auth=${action.token}`, {
                "amount": `${Number(action.prevAmount) + 1}`
            }); break;
            case 'dec': yield axios.patch(`/cart/${action.userId}/${action.itemId}.json?auth=${action.token}`, {
                "amount": `${Number(action.prevAmount) - 1}`
            }); break;
            default: break;
        };
        yield put(actions.initCartItems(action.token, action.userId));
    } catch (error) {
        console.log(error);
    }
}

export function* createUserCartSaga(action) {
    try {
        yield axios.delete('/cart/' + action.userId + '.json?auth=' + action.token);
        yield axios.patch(`/cart/${action.userId}.json?auth=${action.token}`, { userId: action.userId });
    } catch (error) {
        console.log(error);
    }
}
import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* initCartItems(action) {
    // Getting Products From DataBase if not put Failed Action
    try {
        const res = yield axios.get('/cart.json');
        yield put(actions.setCartItems(res.data));
    } catch (error) {
        console.log(error);
        yield put(actions.fetchCartItemsFailed());
    }
}

export function* addItemIntoCart(action) {
    yield axios.post('/cart.json', action.itemData);
}

export function* removeCartItem(action) {
    console.log(action);
    yield axios.delete('/cart/' + action.id + '.json');
    yield put(actions.initCartItems());
}
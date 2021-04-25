import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* initCartItems() {
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
    action.itemData.amount = 1;
    yield axios.post('/cart/.json', action.itemData);
}

export function* removeCartItem(action) {
    yield axios.delete('/cart/' + action.id + '.json');
    yield put(actions.initCartItems());
}

export function* cartItemAmountChange(action) {
    try {
        switch (action.changeType) {
            case 'inc': yield axios.patch(`/cart/${action.itemId}.json`, {
                "amount": `${Number(action.prevAmount) + 1}`
            }); break;
            case 'dec': yield axios.patch(`/cart/${action.itemId}.json`, {
                "amount": `${Number(action.prevAmount) - 1}`
            }); break;
            default: break;
        };
        yield put(actions.initCartItems());
    } catch (error) {
        console.log(error);
    }
}
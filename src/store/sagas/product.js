import { put } from 'redux-saga/effects';
import axios from "../../axios-orders";

import * as actions from '../actions/index';

export function* initProductsSaga(action) {
    // Getting Products From DataBase if not put Failed Action
    try {
        const res = yield axios.get('/products.json');
        yield put(actions.setProducts(res.data))
    } catch (error) {
        yield put(actions.fetchProductsFailed())
    }
}
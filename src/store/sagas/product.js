import { put } from 'redux-saga/effects';
import axios from "../../axios-orders";

import * as actions from '../actions/index';

export function* initProductsSaga(action) {
    // Getting Products From DataBase if not put Failed Action
    try {
        yield put(actions.fetchProductsStart());
        const res = yield axios.get(`/products/${action.category}.json`);
        yield put(actions.setProducts(res.data));
        yield put(actions.fetchProductsSuccess());
    } catch (error) {
        yield put(actions.fetchProductsFailed());
    }
}

export function* initBestsellerProducts(action) {
    // Getting Products From DataBase if not put Failed Action
    yield put(actions.fetchProductsStart('bestsellers'));
    let res = yield axios.get(`/products/bestsellers.json`);
    res = res.data;
    // create actual bestseller products
    const resObj = {};
    for (const key in res) {
        let queryResult = yield axios.get(`/products/${res[key].category}/${res[key].id}.json`);
        resObj[res[key].id] = queryResult.data;
    }
    yield put(actions.setProducts(resObj, 'bestsellers'));
    yield put(actions.fetchProductsSuccess('bestsellers'))
}

export function* getProductSaga(action) {
    try {
        yield put(actions.clearProduct());
        const res = yield axios.get(`/products/${action.category}/${action.productId}.json`);
        yield put(actions.setProduct(res.data));
    } catch (error) {
        yield put(actions.fetchProductsFailed());
    }
}
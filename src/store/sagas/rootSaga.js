import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initProductsSaga } from './product';

export function* watchProducts() {
    yield takeEvery(actionTypes.INITIATE_PRODUCTS, initProductsSaga);
}
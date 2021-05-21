import { call, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import axiosInstance from '../../axios-orders';

import * as actions from '../actions/index';

export function* logoutSaga() {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId');
    yield call([localStorage, 'removeItem'], 'email');
    yield call([localStorage, 'removeItem'], 'firstName');
    yield call([localStorage, 'removeItem'], 'lastName');
    yield put(actions.logoutSucceed());
}

// SET TIMER BEFORE LOGOUT // later use refresh token to make user logged all the time
export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

//  Auth Sign in/up depends on isSignup flag
export function* authUserSaga(action) {
    const formData = action.formData;
    const authData = {
        email: formData.email.value,
        password: formData.password.value,
        returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuckmOvqvu9MFl_v4c50TDRGLhw7FKEE8';
    if (action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuckmOvqvu9MFl_v4c50TDRGLhw7FKEE8';
    };
    try {
        const authResponse = yield axios.post(url, authData);
        const expirationDate = yield new Date(new Date().getTime() + authResponse.data.expiresIn * 1000);
        // set token userId and token expiration date as variables into localStorage
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('token', authResponse.data.idToken);
        yield localStorage.setItem('userId', authResponse.data.localId);
        yield localStorage.setItem('email', formData.email.value);

        let userData = '';
        yield put(actions.authStart());
        if (action.isSignup) {
            yield localStorage.setItem('firstName', formData.firstName.value);
            yield localStorage.setItem('lastName', formData.lastName.value);
            // Put user data into firebase on signUp
            yield axiosInstance.post('/users.json?auth=' + authResponse.data.idToken, {
                firstName: formData.firstName.value,
                lastName: formData.lastName.value,
                userId: authResponse.data.localId
            });
            // Create cart for user
            yield put(actions.createUserCart(authResponse.data.idToken, authResponse.data.localId));

            // Set token and user id into auth redux state
            yield put(actions.authSuccess(authResponse.data.idToken,
                authResponse.data.localId,
                formData.email.value,
                formData.firstName.value,
                formData.lastName.value));
        } else {
            // GET USER DATA With Id
            const queryParams = '?auth=' + authResponse.data.idToken + '&orderBy="userId"&equalTo="' + authResponse.data.localId + '"';
            userData = yield axiosInstance.get(`/users.json` + queryParams);
            // For now take first user
            userData = Object.values({ ...userData.data }).map(val => val)[0];
            // Set first and last name into localMemory
            yield localStorage.setItem('firstName', userData.firstName);
            yield localStorage.setItem('lastName', userData.lastName);
            // Set token and user id into auth redux state
            yield put(actions.authSuccess(authResponse.data.idToken,
                authResponse.data.localId,
                formData.email.value,
                userData.firstName,
                userData.lastName));
        }

        // Put delay before logout(token expiration)
        yield put(actions.checkAuthTimeout(authResponse.data.expiresIn));
    } catch (error) {
        console.log(error);
    };
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    // if token doesn't exist in localStorage => logout
    if (!token) {
        yield put(actions.logout());
    } else {
        // Convert date from string into date object
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        // if token didn't expire
        if (expirationDate > new Date()) {
            const userId = yield localStorage.getItem('userId');
            const email = yield localStorage.getItem('email');
            const firstName = yield localStorage.getItem('firstName');
            const lastName = yield localStorage.getItem('lastName');
            // Set token and user id into auth redux state
            yield put(actions.authSuccess(token, userId, email, firstName, lastName));
            // Set delay before token expires
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        } else {
            yield put(actions.logout());
        }
    }
}
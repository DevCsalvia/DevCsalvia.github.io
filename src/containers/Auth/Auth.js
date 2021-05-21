import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';

import { updateObject, checkValidity } from '../../shared/utility';

import classes from "./Auth.module.css";

// UI components
import Loader from '../../components/UI/Loader/Loader';

// Forms login/signup
import LoginForm from './Login/Login';
import SignUpForm from './SignUp/SignUp';

const Auth = props => {

    const dispatch = useDispatch();
    // Where redirect to after sign in/up
    const redirectPath = useSelector(state => state.auth.authRedirectPath);
    // Authenticated flag
    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const loading = useSelector(state => state.auth.loading);

    // Fields Changed Handler
    const inputChangedHandler = (event, inputIdentifier, formData, setFormData) => {

        // DEEP CLONING
        const updatedFormElement = updateObject(formData[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, formData[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(formData, {
            [inputIdentifier]: updatedFormElement
        });

        setFormData(updatedOrderForm);
    };

    // Form Submit Handler
    const submitHandler = (e, formData, type) => {
        e.preventDefault();
        dispatch(actions.authUser(formData, type ? type : false));
    }

    // REDIRECT AFTER SIGN IN/UP
    let authRedirect = null;
    if (isAuthenticated) {
        authRedirect = <Redirect to={redirectPath} />;
    }

    return (
        <div className={classes.Auth + ' Auth'}>
            {authRedirect}
            {loading ? <Loader /> : ''}
            <div className={classes.Auth__Content}>
                <div className={classes.Auth__LoginFormWrapper}>
                    <LoginForm
                        inputChangedHandler={inputChangedHandler}
                        submitHandler={submitHandler}
                    />
                </div>
                <div className={classes.Auth__Content_Separator}>
                    <span>OR</span>
                </div>
                <div className={classes.Auth__Signup}>
                    <SignUpForm
                        inputChangedHandler={inputChangedHandler}
                        submitHandler={submitHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default Auth;
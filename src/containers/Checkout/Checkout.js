import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxil/Auxil';
import * as actions from '../../store/actions/index';

import { useSelector, useDispatch } from 'react-redux';

import classes from './Checkout.module.css';

// Sections
import Main from './Sections/Main/Main';
import Sidebar from './Sections/Sidebar/Sidebar';

// UI components
import Loader from '../../components/UI/Loader/Loader';

const Checkout = props => {

    const dispatch = useDispatch();

    // Make markup depending on Authentication state
    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const loading = useSelector(state => state.order.loading);

    let markUp = <div className={classes.Checkout}>
        <div className={classes.Checkout__Content}>
            <Main />
            <Sidebar />
        </div>
    </div>;

    if (loading) {
        markUp = <Loader />
    }

    // if not authenticated go to auth page
    if (!isAuthenticated) {
        markUp = <Redirect to='/auth' />
    }

    // make redirect path only if redirect path in this page is not checkout(after logging)
    const redirectPath = useSelector(state => state.auth.authRedirectPath);
    useEffect(() => {
        if (redirectPath !== '/checkout') {
            dispatch(actions.setAuthRedirectPath('/checkout'));
        }
    }, [dispatch, redirectPath]);


    return (
        <Aux>
            {markUp}
        </Aux>
    )
}

export default Checkout;
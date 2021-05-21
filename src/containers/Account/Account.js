import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';

import * as actions from '../../store/actions/index';

import classes from './Account.module.css';


// Account Components
import SidebarList from './SidebarList/SidebarList';
import Main from './Main/Main';

const Account = props => {
    const dispatch = useDispatch();

    // Make markup depending on Authentication state
    const isAuthenticated = useSelector(state => state.auth.token !== null);

    let markUp = <div className={classes.Account + ' AccountWrapper'}>
        <div className={classes.Account__Content}>
            <div className={classes.Account__Sidebar}>
                <SidebarList
                    dispatch={dispatch}
                />
            </div>
            <div className={classes.Account__Main}>
                <Main />
            </div>
        </div>
    </div>;

    // if not authenticated go to auth page
    if (!isAuthenticated) {
        markUp = <Redirect to='/auth' />
    }

    // make redirect path only if redirect path in this page is not account(after logging)
    const redirectPath = useSelector(state => state.auth.authRedirectPath);
    useEffect(() => {
        if (redirectPath !== '/account') {
            dispatch(actions.setAuthRedirectPath('/account'));
        }
    }, [dispatch, redirectPath]);


    return (
        <Aux>
            {markUp}
        </Aux>
    );
}

export default Account;
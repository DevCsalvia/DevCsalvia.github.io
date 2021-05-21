import * as actionsTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    }
};

export const authSuccess = (idToken, userId, email, firstName, lastName) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,
        email: email,
        firstName: firstName,
        lastName: lastName,
    }
};

export const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error: error
    }
};

export const authUser = (formData, isSignup) => {
    return {
        type: actionsTypes.AUTH_USER,
        formData: formData,
        isSignup: isSignup
    }
};


export const logout = () => {
    return {
        type: actionsTypes.AUTH_INITIATE_LOGOUT
    };
};

export const logoutSucceed = () => {
    return {
        type: actionsTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionsTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const authCheckState = () => {
    return {
        type: actionsTypes.AUTH_CHECK_STATE
    };
};

// Set correct redirect path after logging
export const setAuthRedirectPath = (path) => {
    return {
        type: actionsTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

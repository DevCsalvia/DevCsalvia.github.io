import { useState } from 'react';
import { FieldCreateFunction } from '../../../shared/FieldCreateFunction';

import classes from './Login.module.css';

// UI components
import Button from '../../../components/UI/Button/Button';

import InputsArr from '../InputsArr/InputsArr';

const Login = props => {
    // fields data
    const [loginForm, setLoginForm] = useState({
        email: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            validation: {
                required: true,
                isEmail: true
            }
        }),
        password: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            validation: {
                required: true,
                minLength: 6
            }
        })
    });

    // Fields markup Login
    const formElementsMarkupArray = [];
    for (let key in loginForm) {
        formElementsMarkupArray.push({
            id: key,
            config: loginForm[key]
        })
    };

    return (
        <form onSubmit={(e) => props.submitHandler(e, loginForm)}>
            <h2>
                LOGIN
                        </h2>
            <InputsArr
                InputsDataArr={formElementsMarkupArray}
                inputChangedHandler={props.inputChangedHandler}
                formData={loginForm}
                setFormData={setLoginForm}
            />
            <div className={classes.Auth__Login__BtnWrapper}>
                <Button addClass="Button--Black">Sign in</Button>
                <span>Forgot password?</span>
            </div>
        </form>
    );
};

export default Login;
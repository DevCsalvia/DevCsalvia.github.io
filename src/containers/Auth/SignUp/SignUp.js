import { useState } from 'react';
import { FieldCreateFunction } from '../../../shared/FieldCreateFunction';

// UI components
import Button from '../../../components/UI/Button/Button';

import InputsArr from '../InputsArr/InputsArr';

const SignUpForm = props => {

    // fields data
    const [signUpForm, setSignUpForm] = useState({
        firstName: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'First Name'
            }
        }),
        lastName: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Last Name'
            }
        }),
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

    // Fields markup Sign Up
    const formElementsMarkupArray = [];
    for (let key in signUpForm) {
        formElementsMarkupArray.push({
            id: key,
            config: signUpForm[key]
        })
    }

    return (
        <form onSubmit={(e) => props.submitHandler(e, signUpForm, true)}>
            <h2>
                SIGN UP / CREATE NEW ACCOUNT
                        </h2>

            <InputsArr
                InputsDataArr={formElementsMarkupArray}
                inputChangedHandler={props.inputChangedHandler}
                formData={signUpForm}
                setFormData={setSignUpForm}
            />
            <Button addClass="Button--Black">Create Account</Button>
        </form>
    );
};

export default SignUpForm;
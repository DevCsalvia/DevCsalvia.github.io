// UI Components
import Input from '../../../../../../../components/UI/Input/Input';

import { updateObject, checkValidity } from '../../../../../../../shared/utility';

const MainFormList = props => {
    // Fields Changed Handler
    const inputChangedHandler = (event, inputIdentifier) => {
        // DEEP CLONING
        const updatedFormElement = updateObject(props.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, props.orderForm[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(props.orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        props.setOrderForm(updatedOrderForm);
    };



    // Fields markup
    const formElementsMarkupArray = [];
    for (let key in props.orderForm) {
        formElementsMarkupArray.push({
            id: key,
            config: props.orderForm[key]
        })
    }

    return (
        <ul>
            {formElementsMarkupArray.map(formElement => (
                <li key={formElement.id}>
                    <Input
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        addClasses={formElement.config.touched ? formElement.config.valid ? '' : 'input_NotValid' : ''}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        valueType={formElement.id}
                        changed={(e) => inputChangedHandler(e, formElement.id)} />
                </li>
            ))}
        </ul>
    );
};

export default MainFormList;
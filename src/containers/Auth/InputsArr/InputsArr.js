import Input from '../../../components/UI/Input/Input';;

const InputsArr = props => props.InputsDataArr.map(formElement => (
    <Input
        key={formElement.id}
        addClasses={`input_fieldBlackBorder ${formElement.config.touched ? formElement.config.valid ? '' : 'input_NotValid' : ''}`}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        valueType={formElement.id}
        changed={(e) => props.inputChangedHandler(e, formElement.id, props.formData, props.setFormData)} />
));

export default InputsArr;
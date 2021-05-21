export const FieldCreateFunction = (fieldData) => {
    return {
        elementType: fieldData.elType,
        elementConfig: { ...fieldData.elConfig },
        value: fieldData.value ? fieldData.value : '',
        validation: { ...fieldData.validation },
        valid: fieldData.valid ? fieldData.valid : false,
        touched: fieldData.touched ? fieldData.touched : false
    };
};
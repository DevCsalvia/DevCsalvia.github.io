import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../../store/actions/index';

import classes from './ProductInfoForm.module.css';

// Form Components
import FormBtns from './FormBtns/FormBtns';
import ProductSizes from './ProductSizes/ProductSizes';


const ProductInfoForm = props => {
    // Dispatch function creation
    const dispatch = useDispatch()

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    // Label Functionality
    // Here we will store product size for later to be stored in database
    const [productSize, setProductSize] = useState('');

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    // Cart Functionality
    // ADDTOCART BTN HANDLER
    const cartAddHandler = (e, productId) => {
        e.preventDefault();

        // Creating Item Data to be put into cart size/price/name
        const { details, ...itemData } = props.productData;
        itemData.size = productSize;
        itemData.id = productId;
        dispatch(actions.addItemIntoCart(itemData));
    }

    return (<form onSubmit={(e) => cartAddHandler(e, props.match.params.id)}>
        <ProductSizes
            setProductSize={setProductSize} />
        <FormBtns
            productId={props.match.params.id}
            dispatch={dispatch}
            productSize={productSize}
            productData={props.productData} />
    </form>);
};

export default withRouter(ProductInfoForm);
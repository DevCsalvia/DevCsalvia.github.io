import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../../../../../hoc/Auxil/Auxil';
import * as actions from '../../../../../store/actions/index';

// import classes from './ProductInfoForm.module.css';

// Form Components
import FormBtns from './FormBtns/FormBtns';
import ProductSizes from './ProductSizes/ProductSizes';


const ProductInfoForm = props => {
    // Dispatch function creation
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId);
    const token = useSelector(state => state.auth.token);
    const itemAddedFlag = useSelector(state => state.cart.itemAdded);

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    // Label Functionality
    // Here we will store product size for later to be stored in database
    const [productSize, setProductSize] = useState('');

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    // Cart Functionality
    // ADDTOCART BTN HANDLER
    const cartAddHandler = (e, productId) => {
        e.preventDefault();
        if (token && userId) {
            // Creating Item Data to be put into cart size/price/name
            const { details, ...itemData } = props.productData;
            itemData.size = productSize;
            itemData.id = productId;
            dispatch(actions.addItemIntoCart(itemData, token, userId));

        } else {
            dispatch(actions.setAuthRedirectPath(`/products/${props.match.params.id}?category=${props.productData.category}`));
            props.history.push('/auth');
        };
    }

    useEffect(() => {
        if (itemAddedFlag)
            dispatch(actions.cartVisibilityToggle());
    }, [itemAddedFlag, dispatch])

    return (
        <Aux>
            <form onSubmit={(e) => cartAddHandler(e, props.match.params.id)}>
                <ProductSizes
                    setProductSize={setProductSize} />
                <FormBtns
                    productId={props.match.params.id}
                    dispatch={dispatch}
                    productSize={productSize}
                    productData={props.productData} />
            </form>
        </Aux>
    );
};

export default withRouter(ProductInfoForm);
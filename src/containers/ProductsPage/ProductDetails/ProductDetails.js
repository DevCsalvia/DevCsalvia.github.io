import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../../../hoc/Auxil/Auxil';
import * as actions from '../../../store/actions/index';

import classes from './ProductDetails.module.css';

// UI Components
import Loader from '../../../components/UI/Loader/Loader';

// Details Components
import ImgsBlock from './ImgsBlock/ImgsBlock';
import ProductInfo from './ProductInfo/ProductInfo';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';


const ProductDetails = (props) => {
    const dispatch = useDispatch();

    ///////////////////////////////////////////////////////////////////////////////
    // Product get functionality
    const product = useSelector(state => state.product.product); //Product Data
    const loadingAddingItemFlag = useSelector(state => state.cart.loading);

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);

        // getting category of a product form search param of location.
        let category = '';
        for (let param of query.entries()) {
            category = param[1];
        }
        //console.log(props.match.params.id, category);
        //If category is not correct, yield not correct url!
        dispatch(actions.getProduct(props.match.params.id, category));
    }, [props.match.params.id, dispatch, props.location.search]);

    let productMarkup = '';
    if (product) {
        // console.log(product);
        productMarkup = <div className={classes.ProductDetailsWrapper + ' ProductDetailsWrapper'}>
            <div className={classes.ProductDetails__Content}>
                <ImgsBlock
                    category={product.category}
                    imgUrl={product.imgUrl}
                />
                <ProductInfo
                    productData={product} />
            </div>
            <ReviewsBlock />
        </div>
    }
    if (loadingAddingItemFlag || product === null) {
        productMarkup = <div className={classes.Loader}>
            <Loader />
        </div>
    }



    return (
        <Aux>
            {productMarkup}
        </Aux>
    );
};

export default withRouter(ProductDetails);
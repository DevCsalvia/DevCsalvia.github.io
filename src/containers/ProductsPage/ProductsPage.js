import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';
import * as actions from '../../store/actions';

import Product from '../../components/Product/Product';
import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';

import './ProductsPage.css';

const ProductsPage = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    /* Redux Store Access */
    const likes = useSelector(state => state.like.likes);
    const products = useSelector(state => state.product.products);

    /* Likes Functionality */
    const onAddLike = like => dispatch(actions.addLike(like));
    const onRemoveLike = id => dispatch(actions.removeLike(id));

    /* Products Functionality useCallback is used to not to recreate function inside */
    const onInitProducts = useCallback(
        () => dispatch(actions.initProducts()),
        [dispatch]
    );

    /* Prouducts Initializing from DataBase*/
    useEffect(() => {
        onInitProducts();
    }, [onInitProducts]);

    /* Take object keys and compare them to id to know liked or not (Should ask about place of this function) */
    const isLiked = (id) => {
        return Object.keys(likes).find((item) => (likes[item].id === id)) ? true : false;
    }

    const likeBtnClickedHandler = (like) => isLiked(like.id) ? onRemoveLike(like.id) : onAddLike(like);

    /* Create Products Items Markup(li elements) */
    let productsListItemsMarkup = '';
    if (products) {
        productsListItemsMarkup = Object.keys(products)
            .map(productId => {
                let product = products[productId];
                // console.log(product);

                return <Product key={productId}
                    id={productId}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.imgUrl.split(' ')[0]}
                    title={product.title}
                    likeBtnClicked={likeBtnClickedHandler}
                    linkUrl={props.match.url}
                    isLiked={isLiked(productId)} />
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
    }

    /* Products Markup */
    let productsMarkup = <div className="Products-Wrapper">
        <div className="Products__Top-Img">
            <img src="./images/ProductsPage/Products-img-top.jpg" alt="Head Img" />
        </div>
        <div className="Products__Content">
            <h2 className="Products__Content__heading">Our BestSellers</h2>
            <ul className="Products__List">
                {productsListItemsMarkup}
            </ul>
        </div>
    </div>;

    /* ProductsDetails Markup if product is clicked */
    if (!(props.location.pathname === props.match.url)) {
        productsMarkup =
            <Route
                path={props.match.path + '/:id'}
                render={() => <ProductDetails likeBtnClicked={likeBtnClickedHandler} isLiked={isLiked} />} />
    }

    return (
        <Aux>
            {productsMarkup}
        </Aux>
    );
};

export default withRouter(ProductsPage);
import { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { isLiked } from '../../../shared/LikesFunctionality';


import ProductsListItem from './ProductsListItem/ProductsListItem';

import classes from './ProductsList.module.css';

const Products = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    /* Redux Store Access */
    const likes = useSelector(state => state.like.likes);

    /* Redux Store Access */
    const products = useSelector(state => {
        switch (props.sectionCategory) {
            case 'bestsellers': return (state.product.bestsellers);
            default: return (state.product.productsObject);
        }
    });

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    /* Like Btn Handler */
    const likeBtnClickedHandler = (like, liked) => liked ? dispatch(actions.removeLike(like.id)) : dispatch(actions.addLike(like));

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    /* Products Functionality useCallback is used to not to recreate function inside */
    /* Prouducts Initializing from DataBase*/
    const onInitProducts = useCallback(() => {
        switch (props.sectionCategory) {
            case 'bestsellers': return (dispatch(actions.initBestsellerProducts()));
            default: return (dispatch(actions.initProducts(props.sectionCategory)));
        };
    }, [dispatch, props.sectionCategory])

    useEffect(() => {
        // Clear UI
        dispatch(actions.clearProductsObject());
        onInitProducts();
    }, [onInitProducts]);

    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    /* Create Product List Items Markup(li elements) */
    let productsListItems = '';

    if (products) {
        productsListItems = Object.keys(products)
            .map(productId => {
                return (<ProductsListItem
                    likeBtnClicked={likeBtnClickedHandler}
                    key={productId}
                    product={products[productId]}
                    productId={productId}
                    Liked={isLiked(productId, likes)}
                />);
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
    } else {
        productsListItems = <Redirect to='/products' /> // Should remove it!
    }

    return (<ul className={classes.Products__List}>
        {productsListItems}
    </ul>);
};

export default Products;
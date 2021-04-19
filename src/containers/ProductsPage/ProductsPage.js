import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';
import * as actions from '../../store/actions';


import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import ProductsSection from './ProductsSection/ProductsSection';

import './ProductsPage.css';

const ProductsPage = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    /* Redux Store Access */
    const likes = useSelector(state => state.like.likes);

    /* Likes Functionality */
    const onAddLike = like => dispatch(actions.addLike(like));
    const onRemoveLike = id => dispatch(actions.removeLike(id));

    /* Take object keys and compare them to id to know liked or not (Should ask about place of this function) */
    const isLiked = (id) => {
        return Object.keys(likes).find((item) => (likes[item].id === id)) ? true : false;
    }

    const likeBtnClickedHandler = (like) => isLiked(like.id) ? onRemoveLike(like.id) : onAddLike(like);

    /* Products Markup */
    let productsMarkup = <div className="Products-Wrapper">
        <div className="Products__Top-Img">
            <div className="Products__Top-Img__Text">
                Training&nbsp;Essentials
            </div>
            <img src="/images/ProductsPage/Products-img-top.jpg" alt="Head Img" />
        </div>
        <div className="Products__Content">
            <ul className="Products__Categories">
                <li><NavLink to={props.match.url + '/footwear'}>Footwear</NavLink></li>
                <li><NavLink to={props.match.url + '/apparel'}>Apparel</NavLink></li>
                <li><NavLink to={props.match.url + '/accessories'}>Accessories</NavLink></li>
            </ul>
            <Route
                path={props.match.path + '/:category'}
                exact
                render={(props) => <ProductsSection
                    {...props}
                    linkUrl={props.match.url}
                    isLiked={isLiked}
                    likeBtnClickedHandler={likeBtnClickedHandler}
                />} />
            <ProductsSection
                {...props}
                heading="Our BestSellers"
                isLiked={isLiked}
                likeBtnClickedHandler={likeBtnClickedHandler}
                sectionCategory='bestsellers'
            />
        </div>
    </div>;

    /* ProductsDetails Markup if product is clicked */
    if (!(props.location.pathname === props.match.url) && props.location.search !== '') {
        productsMarkup = <Route
            path={props.match.path + '/:id'}
            exact
            render={() => <ProductDetails likeBtnClicked={likeBtnClickedHandler} isLiked={isLiked} />} />;
    }

    return (
        <Aux>
            {productsMarkup}
        </Aux>
    );
};

export default withRouter(ProductsPage);
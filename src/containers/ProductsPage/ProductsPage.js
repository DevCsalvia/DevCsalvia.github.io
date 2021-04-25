import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';

import ProductDetails from './ProductDetails/ProductDetails';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

import classes from './ProductsPage.module.css';

const ProductsPage = (props) => {
    /* Products Markup */
    let productsMarkup = <div className="Products_Wrapper">
        <div className={classes.Products__Top_Img}>
            <div className={classes.Products__Top_Img__Text}>
                Training&nbsp;Essentials
            </div>
            <img src="/images/ProductsPage/Products-img-top.jpg" alt="Head Img" />
        </div>
        <div className={classes.Products__Content}>
            <ul className={classes.Products__Categories}>
                <li><NavLink to={props.match.url + '/footwear'}>Footwear</NavLink></li>
                <li><NavLink to={props.match.url + '/apparel'}>Apparel</NavLink></li>
                <li><NavLink to={props.match.url + '/accessories'}>Accessories</NavLink></li>
            </ul>
            <Route
                path={props.match.path + '/:category'}
                exact
                render={(props) => <ProductsSection
                    {...props}
                />} />
            <ProductsSection
                {...props}
                heading="Our BestSellers"
                sectionCategory='bestsellers'
            />
        </div>
    </div>;

    /* ProductsDetails Markup if product is clicked */
    if (!(props.location.pathname === props.match.url) && props.location.search !== '') {
        productsMarkup = <Route
            path={props.match.path + '/:id'}
            exact
            render={() => <ProductDetails /*likeBtnClicked={likeBtnClickedHandler} isLiked={isLiked}*/ />} />;
    }

    return (
        <Aux>
            {productsMarkup}
        </Aux>
    );
};

export default withRouter(ProductsPage);
import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';
import axios from '../../axios-orders';

import Product from '../../components/Product/Product';
import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';

import './ProductsPage.css';

const ProductsPage = (props) => {

    const [productsArray, setProductsArray] = useState([]);

    /* Getting array of product objects and set into useState Later we will do it in Redux */
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/products.json');
            console.log(result);
            setProductsArray(result.data);
        };

        fetchData();
    }, []);

    let products = <div className="Products-Wrapper">
        <div className="Products__Top-Img"></div>
        <div className="Products__Content">
            <h2 className="Products__Content__heading">Our BestSellers</h2>
            <ul className="Products__List">
                <Product link={props.match.path} />
            </ul>
        </div>
    </div>;
    if (!(props.location.pathname === props.match.url)) {
        products = <Route
            path={props.match.path + '/productDetails'}
            render={() => <ProductDetails />} />
    }
    return (
        <Aux>
            {products}
        </Aux>
    );
};

export default withRouter(ProductsPage);
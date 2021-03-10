import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxil/Auxil';
import axios from '../../axios-orders';

import Product from '../../components/Product/Product';
import ProductDetails from '../../components/Product/ProductDetails/ProductDetails';

import './ProductsPage.css';

const ProductsPage = (props) => {

    const [productsObjArray, setProductsArray] = useState({});

    /* Should think about loading several times */
    /* Getting array of product objects and set into useState Later we will do it in Redux */
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/products.json');
            setProductsArray(result.data);
        };

        fetchData();
    }, []);

    /* Create Products Markup(li elements) */
    let productsMarkup = Object.keys(productsObjArray)
        .map(productKey => {
            let product = productsObjArray[productKey];
            // console.log(product);

            return <Product key={productKey}
                id={productKey}
                name={product.name}
                price={product.price}
                imgUrl={product.imgUrl.split(' ')[0]} />
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    // console.log(productsMarkup); //Should set Data through axios post Think about it!

    let products = <div className="Products-Wrapper">
        <div className="Products__Top-Img">
            <img src="./images/ProductsPage/Products-img-top.jpg" alt="Head Img" />
        </div>
        <div className="Products__Content">
            <h2 className="Products__Content__heading">Our BestSellers</h2>
            <ul className="Products__List">
                {productsMarkup}
            </ul>
        </div>
    </div>;
    if (!(props.location.pathname === props.match.url)) {
        products = <Route
            path={props.match.path + '/productdetails'}
            render={() => <ProductDetails />} />
    }
    return (
        <Aux>
            {products}
        </Aux>
    );
};

export default withRouter(ProductsPage);
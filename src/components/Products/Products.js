import { useEffect, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aux from '../../hoc/Auxil/Auxil';
import * as actions from '../../store/actions';

// My icons
import { ReactComponent as HeartOSvg } from '../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../assets/SVG-Icons/heart.svg';

import './Products.css';

const Products = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    /* Redux Store Access */
    const products = useSelector(state => props.sectionCategory === 'bestsellers' ? state.product.bestsellers : state.product.products);

    /* Products Functionality useCallback is used to not to recreate function inside */
    const onInitProducts = useCallback(props.sectionCategory === 'bestsellers' ?
        () => dispatch(actions.initBestsellerProducts())
        : () => dispatch(actions.initProducts(props.sectionCategory)), [dispatch, props.sectionCategory]);


    /* Prouducts Initializing from DataBase*/
    useEffect(() => {
        onInitProducts();
    }, [onInitProducts]);

    /* Create Products Items Markup(li elements) */
    let productsItems = '';

    if (products) {
        productsItems = Object.keys(products)
            .map(productId => {
                let product = products[productId];
                return <li key={productId} className="Product__grid__item">
                    <button className="Product__grid__item__like-btn"
                        onClick={() => props.likeBtnClicked({
                            id: productId,
                            category: product.category,
                            imgUrl: product.imgUrl.split(' ')[0],
                            name: product.name,
                            price: product.price,
                            title: product.title
                        })}>
                        {props.isLiked(productId) ? <HeartSvg /> : <HeartOSvg />}
                    </button>
                    <div className="Product__grid__item__img">
                        <Link
                            to={{
                                pathname: `/products/${productId}`,
                                search: `?category=${product.category}`
                            }}>
                            <img src={`../images/ProductsPage/img/${product.category}/${product.imgUrl.split(' ')[0]}`} alt="Product Img" />
                        </Link>
                    </div>
                    <h6 className="Product__grid__item__name">{product.name}</h6>
                    <span className="Product__grid__item__price">{product.price}rub</span>
                </li>;
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
    } else {
        productsItems = <Redirect to='/products' />
    }

    return (<Aux>
        {productsItems}
    </Aux>);
};

export default Products;
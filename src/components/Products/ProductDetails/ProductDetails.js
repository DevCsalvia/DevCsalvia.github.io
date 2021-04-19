import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../../../hoc/Auxil/Auxil';
import * as actions from '../../../store/actions/index';

import './ProductDetails.css';

import Stars from '../../UI/Stars/Stars';
import Button from '../../UI/Button/Button';
import Accrodion from '../../UI/Accordion/Accordion';

import { ReactComponent as HeartOSvg } from '../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../../assets/SVG-Icons/heart.svg';


const ProductDetails = (props) => {
    // Here we will store product size for later to be stored in database
    const [productSize, setProductSize] = useState('');

    const dispatch = useDispatch();
    let productMarkup = '';

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

    const product = useSelector(state => state.product.product); //Product Data

    // labelClickedHandler
    const labelClickedHanlder = (e) => {
        const elClasses = e.target.parentNode.classList;
        const className = "Product-Details__Content__product-size-grid__Label--Checked";
        const prevElement = document.querySelector(`.${className}`);

        // If element is not checked then add class and update Product Size
        if (!elClasses.contains(className)) {
            elClasses.add(className);
            setProductSize(e.target.value);
        }

        // If prevElement is not equal to the current element that was clicked, prevElement remove class and uncheck
        if (prevElement && prevElement !== e.target.parentNode) {
            prevElement.classList.remove(`${className}`);
            prevElement.firstChild.checked = false;
        }
    };

    // ADDTOCART BTN HANDLER
    const cartAddHandler = (e) => {
        e.preventDefault();

        // Creating Item Data to be put into cart size/price/name
        const { details, ...itemData } = product;
        itemData.size = productSize;
        dispatch(actions.addItemIntoCart(itemData));
    }

    // Size Markup
    const sizeMarkup = [];
    for (let i = 34; i < 49; i++) {
        sizeMarkup.push(<label className="Product-Details__Content__product-size-grid__Label" key={i}>
            <input type="checkbox" value={i} onChange={(e) => labelClickedHanlder(e)} />{i}
        </label>);
    };

    if (product) {
        // console.log(product);
        productMarkup = <div className="Product-Details-Wrapper">
            <div className="Product-Details__Content">
                <div className="Product-Details__Content__imgs-block">
                    <div className="Product-Details__Content__img">
                        <img src={`../images/ProductsPage/img/${product.category}/${product.imgUrl.split(' ')[0]}`} alt="Product" />
                    </div>
                    <div className="Product-Details__Content__img">
                        <img src={`../images/ProductsPage/img/${product.category}/${product.imgUrl.split(' ')[1]}`} alt="Product" />
                    </div>
                </div>
                <div className="Product-Details__Content__product-props">
                    <div className="Product-Details__Content__product-title">{product.title}</div>
                    <div className="Product-Details__Content__product-name">{product.name}</div>
                    <div className="Product-Details__Content__product-price">{product.price}rub</div>
                    <div className="Product-Details__Content__product-stars">
                        <Stars amount='5' /> <span>4.9</span>
                    </div>
                    <form onSubmit={cartAddHandler}>
                        <div className="Product-Details__Content__product-size">
                            <span className="Product-Details__Content__product-status">SELECT A SIZE</span>
                            <div className="Product-Details__Content__product-size-grid">
                                {sizeMarkup}
                            </div>
                        </div>
                        <div className="Product-Details__Content__product-props__Buttons-Wrapper">
                            <Button disabled={productSize ? false : true} addClass="Button--Black">ADD TO CART</Button>
                            <div className="Product-Details__Content__product-props__Heart-Btn"
                                onClick={() => props.likeBtnClicked({
                                    id: props.match.params.id,
                                    category: product.category,
                                    imgUrl: product.imgUrl.split(' ')[0],
                                    name: product.name,
                                    price: product.price,
                                    title: product.title
                                })}>{props.isLiked(props.match.params.id) ? <HeartSvg /> : <HeartOSvg />}</div>
                        </div>
                    </form>
                    <Accrodion detailsContent={product.details} />
                </div>
            </div>
            <div className="Product-Details__Content__Reviews">
                <div className="Product-Details__Content__Reviews__Text-block">
                    <span>BASED ON 5843 REVIEWS</span>
                    <div>
                        <Stars amount='5' /> <span>4.8</span>
                    </div>
                </div>

                <Button link={props.location.pathname + props.location.search} addClass="Button--Black">WRITE A COMMENT</Button>
            </div>
        </div>
    } else productMarkup = 'LOADING!';


    return (
        <Aux>
            {productMarkup}
        </Aux>
    );
};

export default withRouter(ProductDetails);
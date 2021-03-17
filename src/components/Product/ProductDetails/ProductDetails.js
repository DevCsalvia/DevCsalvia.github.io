import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../../../hoc/Auxil/Auxil';

import './ProductDetails.css';

import Stars from '../../UI/Stars/Stars';
import Button from '../../UI/Button/Button';
import Accrodion from '../../UI/Accordion/Accordion';

import { ReactComponent as HeartOSvg } from '../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../../assets/SVG-Icons/heart.svg';


const ProductDetails = (props) => {
    const products = useSelector(state => state.product.products); //Products Array

    const product = products[props.match.params.id]; /* Should make query! */

    let productMarkup = '';
    console.log(product);

    if (product) {
        productMarkup = <div className="Product-Details-Wrapper">
            <div className="Products-Details__Content">
                <div className="Products-Details__Content__imgs-block">
                    <div className="Products-Details__Content__img">
                        <img src={`../images/ProductsPage/img/${product.imgUrl.split(' ')[0]}`} alt="Product" />
                    </div>
                    <div className="Products-Details__Content__img">
                        <img src={`../images/ProductsPage/img/${product.imgUrl.split(' ')[1]}`} alt="Product" />
                    </div>
                </div>
                <div className="Products-Details__Content__product-props">
                    <div className="Products-Details__Content__product-title">{product.title}</div>
                    <div className="Products-Details__Content__product-name">{product.name}</div>
                    <div className="Products-Details__Content__product-price">{product.price}rub</div>
                    <div className="Products-Details__Content__product-stars">
                        <Stars amount='5' /> <span>4.9</span>
                    </div>
                    <div className="Products-Details__Content__product-size">
                        <span className="Products-Details__Content__product-status">SELECT A SIZE</span>
                        <div className="Products-Details__Content__product-size-grid">
                            <button><span>32</span></button>
                            <button><span>33</span></button>
                            <button><span>34</span></button>
                            <button><span>35</span></button>
                            <button><span>36</span></button>
                            <button><span>37</span></button>
                            <button><span>38</span></button>
                            <button><span>39</span></button>
                            <button><span>40</span></button>
                            <button><span>41</span></button>
                            <button><span>42</span></button>
                            <button><span>43</span></button>
                            <button><span>44</span></button>
                            <button><span>45</span></button>
                            <button><span>46</span></button>
                            <button><span>47</span></button>
                            <button><span>48</span></button>
                            <button><span>49</span></button>
                            <button><span>50</span></button>
                            <button><span>51</span></button>
                            <button><span>52</span></button>
                            <button><span>53</span></button>
                            <button><span>54</span></button>
                            <button><span>55</span></button>
                            <button><span>56</span></button>
                            <button><span>57</span></button>
                            <button><span>58</span></button>
                        </div>
                    </div>
                    <div className="Products-Details__Content__product-props__Button-Wrapper">
                        <Button link='#' addClass="Products-Details__Content__product-props__Button">ADD TO BAG</Button>
                        <div className="Products-Details__Content__product-props__Heart-Btn"
                            onClick={() => props.likeBtnClicked({
                                id: props.match.params.id,
                                imgUrl: product.imgUrl.split(' ')[0],
                                name: product.name,
                                price: product.price,
                                title: product.title
                            })}>{props.isLiked(props.match.params.id) ? <HeartSvg /> : <HeartOSvg />}</div>
                    </div>
                    <Accrodion detailsContent={product.details} />
                </div>
            </div>
            <div className="Products-Details__Content__Reviews">
                <div className="Products-Details__Content__Reviews__Text-block">
                    <span>BASED ON 5843 REVIEWS</span>
                    <div>
                        <Stars amount='5' /> <span>4.8</span>
                    </div>
                </div>

                <Button link='#' addClass="Products-Details__Content__Reviews__Button">WRITE A COMMENT</Button>
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